# ranch
Ai Code Translator

# Tech Stack
## Frontend
- SPA with **Next.js**
- State Management with **Redux Toolkit**
- Styling with **SASS**
- Written in **TypeScript**

## API
- **gRPC** API Paradigma
- (De)Serialization with **Protocol Buffers**
- Client with **grpc-web**
- Server with **grpc-js**
- gRPC web proxy with **Envoy**

## Backend
- Written in **TypeScript**
- Running on **Node.js**
- Interfacing database with **Prisma**
- Database is **MongoDB**

## Deployment
- Containerized with **Docker**
- Orchestration with **Docker Compose**
 
# Setup
## Install Protobuf Conpiler `protoc`
[Installation Guide](https://grpc.io/docs/protoc-installation/) 
## Download Alpaca Model Weights
1. Download the model file [ggml-alpaca-7b-q4.bin](https://huggingface.co/Sosaka/Alpaca-native-4bit-ggml/blob/main/ggml-alpaca-7b-q4.bin)
2. Place it into `ranch-deployment/.volumes/alpaca.cpp/ggml-alpaca-7b-q4.bin`