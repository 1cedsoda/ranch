import {
    Server,
    ServerCredentials,
    ServiceDefinition,
    UntypedServiceImplementation,
} from '@grpc/grpc-js';
import { AlpacaRunner } from './alpaca/runner';
import { AlpacaServer } from './services/alpaca';
import { ChatService, AlpacaService, AlpacaState } from 'ranch-proto';
import { ChatServer } from './services/chat';
import { alpacaRunnerManager } from './alpaca/runner_manager';

async function main(): Promise<void> {
    const server = new Server();
    server.addService(AlpacaService, new AlpacaServer());
    server.addService(ChatService, new ChatServer());
    server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server is running on 0.0.0.0:4000');
    });

    const a = alpacaRunnerManager.createRunner('test');
    a.onStateChange((state)=>{console.log("State:", state)})
    await a.whenReady();
    a.prompt('100*100=').then((answer) => {
        console.log(answer);
    });
}

main();
