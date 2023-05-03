import { AlpacaRunner } from "./runner"

export class AlpacaRunnerManager {
    runners: Record<string, AlpacaRunner>

    // singleton
    private static _singleton: AlpacaRunnerManager
    static get singleton(): AlpacaRunnerManager {
        if (!AlpacaRunnerManager._singleton) AlpacaRunnerManager._singleton = new AlpacaRunnerManager()
        return AlpacaRunnerManager._singleton
    }
    
    constructor() {
        this.runners = {
            'prepared_runner': new AlpacaRunner()
        }
    }

    createRunner(id: string): AlpacaRunner {       
        this.runners[id] = this.runners['prepared_runner']
        delete this.runners['prepared_runner']
        this.runners['prepared_runner'] = new AlpacaRunner()
        setTimeout(() => {
            this.runners[id].kill()
            delete this.runners[id]
        }, 1000 * 60 * 5) // 5 minutes
        return this.runners[id]
    }

    getRunner(id: string): AlpacaRunner | undefined {
        if (id in this.runners) {
            return this.runners[id]
        }
    }
}

export const alpacaRunnerManager = AlpacaRunnerManager.singleton