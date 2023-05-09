import { spawn, type ChildProcessWithoutNullStreams } from 'child_process'
import { EventEmitter } from 'events'
import { AlpacaRunnerState } from './runner_state'

export class AlpacaRunner extends EventEmitter {
  cp: ChildProcessWithoutNullStreams
  state: AlpacaRunnerState

  constructor() {
    super()
    this.state = AlpacaRunnerState.INIT
    this.cp = spawn('./chat', [], {
      cwd: '/alpaca.cpp',
      shell: true
    })
    this.emit('state', AlpacaRunnerState.INIT)
    this.cp.stdout.setEncoding('utf8')
    this.cp.stdout.once('data', (data) => {
      data = data.toString()
      console.log('OUT', data)
      if (this.isPromptCursor(data) && this.state != AlpacaRunnerState.READY) {
        console.log('READY')
        this.state = AlpacaRunnerState.READY
        console.log(this.state)
        this.emit('state', this.state)
        this.emit('ready')
      }
    })
    this.cp.stderr.setEncoding('utf8')
    this.cp.stderr.on('data', (data) => {
      console.log('LOAD', data.toString())
    })
  }

  private isPromptCursor(data: string): boolean {
    return data.includes('\n> ')
  }

  kill (): void {
    this.cp.kill()
  }

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

    const preparedPrompt = prompt.replace('\n', '\\') + '\n'
    this.cp.stdin.write(prompt + '\n')
    this.state = AlpacaRunnerState.RUNNING
    this.emit('state', this.state)

    this.cp.stdout.setEncoding('utf8')
    this.cp.stdout.on('data', (data: any) => {
      data = data.toString()
      if (this.isPromptCursor(data)) {
        onEnd?.call(this)
        console.log('READY')
        this.state = AlpacaRunnerState.READY
        this.emit('state', this.state)
        this.emit('ready')
      } else {
        let escapedData = data.replace(
          /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
        if (onData != null) onData?.call(this, escapedData)
      }
    })
  }
}
