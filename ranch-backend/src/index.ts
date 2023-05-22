import {
  Server,
  ServerCredentials,
  ServiceDefinition,
} from '@grpc/grpc-js'
import { AlpacaServer } from './services/alpaca'
import { ChatServer } from './services/chat'
import { AuthServer } from './services/auth'
import { AlpacaService, AuthService, ChatService } from 'ranch-proto/dist/grpc'
import * as mongo from './mongo/mongo'

mongo.connect()
const server = new Server()
server.addService(AlpacaService as any, new AlpacaServer())
server.addService(ChatService as any, new ChatServer())
server.addService(AuthService as any, new AuthServer())
server.bindAsync('0.0.0.0:8080', ServerCredentials.createInsecure(), () => {
  server.start()
  console.log('server is running on 0.0.0.0:8080')
})
