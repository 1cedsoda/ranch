// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alpaca_pb = require('./alpaca_pb.js');

function serialize_AlpacaGetReply(arg) {
  if (!(arg instanceof alpaca_pb.AlpacaGetReply)) {
    throw new Error('Expected argument of type AlpacaGetReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AlpacaGetReply(buffer_arg) {
  return alpaca_pb.AlpacaGetReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AlpacaGetRequest(arg) {
  if (!(arg instanceof alpaca_pb.AlpacaGetRequest)) {
    throw new Error('Expected argument of type AlpacaGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AlpacaGetRequest(buffer_arg) {
  return alpaca_pb.AlpacaGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AlpacaPromptReply(arg) {
  if (!(arg instanceof alpaca_pb.AlpacaPromptReply)) {
    throw new Error('Expected argument of type AlpacaPromptReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AlpacaPromptReply(buffer_arg) {
  return alpaca_pb.AlpacaPromptReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AlpacaPromptRequest(arg) {
  if (!(arg instanceof alpaca_pb.AlpacaPromptRequest)) {
    throw new Error('Expected argument of type AlpacaPromptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AlpacaPromptRequest(buffer_arg) {
  return alpaca_pb.AlpacaPromptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AlpacaService = exports.AlpacaService = {
  getAlpaca: {
    path: '/Alpaca/GetAlpaca',
    requestStream: false,
    responseStream: false,
    requestType: alpaca_pb.AlpacaGetRequest,
    responseType: alpaca_pb.AlpacaGetReply,
    requestSerialize: serialize_AlpacaGetRequest,
    requestDeserialize: deserialize_AlpacaGetRequest,
    responseSerialize: serialize_AlpacaGetReply,
    responseDeserialize: deserialize_AlpacaGetReply,
  },
  streamGetAlpaca: {
    path: '/Alpaca/StreamGetAlpaca',
    requestStream: false,
    responseStream: true,
    requestType: alpaca_pb.AlpacaGetRequest,
    responseType: alpaca_pb.AlpacaGetReply,
    requestSerialize: serialize_AlpacaGetRequest,
    requestDeserialize: deserialize_AlpacaGetRequest,
    responseSerialize: serialize_AlpacaGetReply,
    responseDeserialize: deserialize_AlpacaGetReply,
  },
  promptAlpaca: {
    path: '/Alpaca/PromptAlpaca',
    requestStream: false,
    responseStream: true,
    requestType: alpaca_pb.AlpacaPromptRequest,
    responseType: alpaca_pb.AlpacaPromptReply,
    requestSerialize: serialize_AlpacaPromptRequest,
    requestDeserialize: deserialize_AlpacaPromptRequest,
    responseSerialize: serialize_AlpacaPromptReply,
    responseDeserialize: deserialize_AlpacaPromptReply,
  },
};

exports.AlpacaClient = grpc.makeGenericClientConstructor(AlpacaService);
