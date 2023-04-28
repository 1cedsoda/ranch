import {
    Server,
    ServerCredentials,
} from '@grpc/grpc-js';
const server = new Server();

server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
    server.start();

    console.log('server is running on 0.0.0.0:4000');
});