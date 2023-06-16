import { MockAlapcaRunner } from './mock_runner'
import { AlpacaRunner } from './runner'
import { AlpacaRunnerManager } from './runner_manager'

export class MockAlpacaRunnerManager extends AlpacaRunnerManager {
  runners: Record<string, MockAlapcaRunner>

  // singleton
  private static _mockSingleton: MockAlpacaRunnerManager
  static get singleton (): MockAlpacaRunnerManager {
    if (!MockAlpacaRunnerManager._mockSingleton) MockAlpacaRunnerManager._mockSingleton = new MockAlpacaRunnerManager()
    return MockAlpacaRunnerManager._mockSingleton
  }

  constructor () {
    super();
    this.runners = {
      // prepared_runner: new AlpacaRunner()
    }
  }

  createRunner (id: string): MockAlapcaRunner {
    console.log('MockAlpacaRunnerManager.createRunner', id)
    // this.runners[id] = this.runners.prepared_runner
    // delete this.runners.prepared_runner
    // this.runners.prepared_runner = new AlpacaRunner()
    this.runners[id] = new MockAlapcaRunner()
    setTimeout(() => {
      this.runners[id].kill()
      delete this.runners[id]
    }, 1000 * 60 * 5) // 5 minutes
    return this.runners[id]
  }

  getRunner (id: string): MockAlapcaRunner | undefined {
    console.log('MockAlpacaRunnerManager.getRunner', id)
    if (id in this.runners) {
      return this.runners[id]
    }
  }
}

export const mockAlpacaRunnerManager = MockAlpacaRunnerManager.singleton
