import {
    Server,
    ServerCredentials,
    ServiceDefinition,
    UntypedServiceImplementation,
} from '@grpc/grpc-js';
import { AlpacaRunner } from './alpaca/runner';
import { AlpacaServer } from './services/alpaca';
import { ChatService, AlpacaService } from 'ranch-proto';
import { ChatServer } from './services/chat';

class TypedServerOverride extends Server {
    addServiceTyped<TypedServiceImplementation extends Record<any,any>>(service: ServiceDefinition<UntypedServiceImplementation>, implementation: TypedServiceImplementation): void {
        this.addService(service, implementation)
    }
}

async function main(): Promise<void> {
    const server = new TypedServerOverride();
    server.addService(AlpacaService as unknown as ServiceDefinition, new AlpacaServer() as unknown as UntypedServiceImplementation);
    server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server is running on 0.0.0.0:4000');
    });

    const a = new AlpacaRunner();
    a.onStateChange((s)=>{console.log(s)})
    await a.whenReady();
    a.prompt(a, 'wer ist elon musk', (data) => {
        console.log(data);
    }, () => {
        console.log('end');
    });
}

main();
