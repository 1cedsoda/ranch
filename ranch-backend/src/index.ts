import {
  Server,
  ServerCredentials,
  ServiceDefinition,
} from '@grpc/grpc-js'
import { AlpacaServer } from './services/alpaca'
import { ChatServer } from './services/chat'
import { AlpacaService, ChatService } from 'ranch-proto/dist/grpc'
import { prisma } from './prisma/prisma'

async function main (): Promise<void> {
  const server = new Server()
  server.addService(AlpacaService as any, new AlpacaServer())
  server.addService(ChatService as any, new ChatServer())
  server.bindAsync('0.0.0.0:8080', ServerCredentials.createInsecure(), () => {
    server.start()
    console.log('server is running on 0.0.0.0:8080')
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
