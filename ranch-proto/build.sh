#!/bin/bash

PROTO_DIR=./proto
OUT_DIR=./gen

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --grpc_out=grpc_js:$OUT_DIR \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:$OUT_DIR \
    -I ./proto \
    proto/*.proto