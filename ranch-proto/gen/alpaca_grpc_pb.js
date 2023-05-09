// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alpaca_pb = require('./alpaca_pb.js');

function serialize_GetStateRequest(arg) {
  if (!(arg instanceof alpaca_pb.GetStateRequest)) {
    throw new Error('Expected argument of type GetStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetStateRequest(buffer_arg) {
  return alpaca_pb.GetStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetStateResponse(arg) {
  if (!(arg instanceof alpaca_pb.GetStateResponse)) {
    throw new Error('Expected argument of type GetStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetStateResponse(buffer_arg) {
  return alpaca_pb.GetStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PromptRequest(arg) {
  if (!(arg instanceof alpaca_pb.PromptRequest)) {
    throw new Error('Expected argument of type PromptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PromptRequest(buffer_arg) {
  return alpaca_pb.PromptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PromptResponse(arg) {
  if (!(arg instanceof alpaca_pb.PromptResponse)) {
    throw new Error('Expected argument of type PromptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PromptResponse(buffer_arg) {
  return alpaca_pb.PromptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AlpacaService = exports.AlpacaService = {
  getState: {
    path: '/Alpaca/GetState',
    requestStream: false,
    responseStream: false,
    requestType: alpaca_pb.GetStateRequest,
    responseType: alpaca_pb.GetStateResponse,
    requestSerialize: serialize_GetStateRequest,
    requestDeserialize: deserialize_GetStateRequest,
    responseSerialize: serialize_GetStateResponse,
    responseDeserialize: deserialize_GetStateResponse,
  },
  streamState: {
    path: '/Alpaca/StreamState',
    requestStream: false,
    responseStream: true,
    requestType: alpaca_pb.GetStateRequest,
    responseType: alpaca_pb.GetStateResponse,
    requestSerialize: serialize_GetStateRequest,
    requestDeserialize: deserialize_GetStateRequest,
    responseSerialize: serialize_GetStateResponse,
    responseDeserialize: deserialize_GetStateResponse,
  },
  prompt: {
    path: '/Alpaca/Prompt',
    requestStream: false,
    responseStream: true,
    requestType: alpaca_pb.PromptRequest,
    responseType: alpaca_pb.PromptResponse,
    requestSerialize: serialize_PromptRequest,
    requestDeserialize: deserialize_PromptRequest,
    responseSerialize: serialize_PromptResponse,
    responseDeserialize: deserialize_PromptResponse,
  },
};

exports.AlpacaClient = grpc.makeGenericClientConstructor(AlpacaService);
