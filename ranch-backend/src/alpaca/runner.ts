import { spawn, type ChildProcessWithoutNullStreams } from 'child_process'
import { EventEmitter } from 'events'
import { AlpacaRunnerState } from './runner_state'

export class AlpacaRunner extends EventEmitter {
  cp: ChildProcessWithoutNullStreams
  state: AlpacaRunnerState

  constructor () {
    super()
    this.state = AlpacaRunnerState.INIT
    this.cp = spawn('./chat', [], {
      cwd: '/alpaca.cpp',
      shell: true
    })
    this.emit('state', AlpacaRunnerState.INIT)
    this.cp.stdout.once('data', (data) => {
      data = data.toString()
      if (this.isPromptCursor(data) && this.state !== AlpacaRunnerState.READY) {
        this.state = AlpacaRunnerState.READY
        this.emit('state', this.state)
        this.emit('ready')
      }
    })
  }

  private isPromptCursor (data: string): boolean {
    return data.includes('\n> ')
  }

  kill (): void {
    this.cp.kill()
  }

  async whenReady (): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.onStateChange((state) => {
        if (state == AlpacaRunnerState.READY) {
          resolve()
        }
      })
    })
  }

  async onStateChange (callback: (state: AlpacaRunnerState) => void) {
    const listener = this.on('state', (state: AlpacaRunnerState) => {
      callback(state)
    })
  }

  async prompt (prompt: string, onData?: (data: string) => void, onEnd?: () => void): Promise<string> {
    if (this.state != AlpacaRunnerState.READY) {
      throw new Error('Alpaca is not ready')
    }

    const preparedPrompt = prompt.replace('\n', '\\') + '\n'
    this.cp.stdin.write(prompt + '\n')
    this.state = AlpacaRunnerState.RUNNING
    this.emit('state', this.state)

    let output = ''

    return await new Promise((resolve, reject) => {
      this.cp.stdout.on('data', (data: any) => {
        data = data.toString()
        if (this.isPromptCursor(data)) {
          if (onEnd != null) onEnd()
          resolve(output)
          this.state = AlpacaRunnerState.READY
          this.emit('state', this.state)
          this.emit('ready')
        } else {
          if (onData != null) onData(data)
          output += data
        }
      })
    })
  }
}
