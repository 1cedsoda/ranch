import { ChildProcessWithoutNullStreams } from "child_process";
import { AlpacaRunner } from "./runner";
import { AlpacaRunnerState } from "./runner_state";
import { set } from "mongoose";

export class MockAlapcaRunner extends AlpacaRunner {
    cp: ChildProcessWithoutNullStreams
    state: AlpacaRunnerState

    constructor() {
        super();
        this.cp = undefined as unknown as ChildProcessWithoutNullStreams;
        this.state = AlpacaRunnerState.INIT
        setTimeout(() => {
            this.state = AlpacaRunnerState.READY
        }, 3000)
    }

    kill () {}

    async whenReady(): Promise<void> {
        await new Promise<void>((resolve, reject) => {
          this.onStateChange((state) => {
            if (state == AlpacaRunnerState.READY) {
              resolve()
            }
          })
        })
      }
    
      async onStateChange(callback: (state: AlpacaRunnerState) => void) {
        const listener = this.on('state', (state: AlpacaRunnerState) => {
          callback(state)
        })
      }
    
      async promptPromise(prompt: string): Promise<string> {
        let output = ''
    
        return await new Promise((resolve, reject) => {
          try {
            this.prompt(prompt, (data) => {
              output += data
            }, () => {
              resolve(output)
            })
          } catch (e) {
            reject(e)
          }
        })
      }
    
      async prompt(prompt: string, onData?: (data: string) => void, onEnd?: () => void, onError?: (error: Error) => void) {
        if (this.state != AlpacaRunnerState.READY) {
          const error = new Error('AlpacaRunner is not ready')
          console.error(error)
          onError?.call(this, error)
          return;
        }
    
        console.log('PROMPT', prompt)
    
        this.state = AlpacaRunnerState.RUNNING
        this.emit('state', this.state)

        let result = 'Hello World'.split('');

        const interval = setInterval(() => {
            if (result.length > 0) {
                onData?.call(this, result.shift() as string)
            } else {
                clearInterval(interval)
                onEnd?.call(this)
                console.log('READY')
            this.state = AlpacaRunnerState.READY
            this.emit('state', this.state)
            this.emit('ready')
            }
        }, 500)
      }
    
}