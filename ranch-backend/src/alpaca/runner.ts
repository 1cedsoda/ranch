import { spawn, ChildProcessWithoutNullStreams } from 'child_process'
import { EventEmitter } from 'events'

enum AlpacaState {
    INIT,
    READY,
    RUNNING,
}

export class AlpacaRunner extends EventEmitter {
    cp: ChildProcessWithoutNullStreams
    state: AlpacaState

    constructor() {
        super()
        this.state = AlpacaState.INIT
        this.cp = spawn('./chat', [], {
            cwd: '/alpaca.cpp',
            shell: true
        })
        this.emit('state', AlpacaState.INIT)
        this.cp.stdout.on('data', (data) => {
            data = data.toString()
            if (this.state == AlpacaState.INIT || this.state == AlpacaState.RUNNING) {
                if (this.isPromptCursor(data)) {
                    this.state = AlpacaState.READY
                    this.emit('state', AlpacaState.READY)
                    this.emit('ready')
                }
            }
        })
    }

    private isPromptCursor(data: string): boolean {
        return data.includes("\n> ")
    }

    async whenReady(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.onStateChange((state)=>{
                if (state == AlpacaState.READY) {
                    resolve();
                }
            })
        })
    }

    async onStateChange(callback: (state: AlpacaState)=>void) {
        const listener = this.on('state', (state: AlpacaState) => {
            callback(state)
        })
    }


    async prompt(runner: AlpacaRunner, prompt: string, onData?: (data: string) => void, onEnd?: () => void): Promise<string> {
        if (this.state != AlpacaState.READY) {
            throw new Error('Alpaca is not ready')
        }

        const preparedPrompt = prompt.replace("\n", "\\") + "\n"
        runner.cp.stdin.write(prompt + '\n')
        let output = ""

        return new Promise((resolve, reject) => {
            runner.cp.stdout.on('data', (data: any) => {
                data = data.toString()
                if (this.isPromptCursor(data)) {
                    if (onEnd) onEnd()
                    resolve(output)
                } else {
                    if (onData) onData(data)
                    output += data
                }
            })
        })
        
        // log errors   
        // runner.cp.stderr.on('data', (data) => {
        //     // console.log("ERR",data.toString())
        // })
    }
}