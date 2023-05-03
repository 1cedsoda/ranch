// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_AddMessageReply(arg) {
  if (!(arg instanceof chat_pb.AddMessageReply)) {
    throw new Error('Expected argument of type AddMessageReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddMessageReply(buffer_arg) {
  return chat_pb.AddMessageReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddMessageRequest(arg) {
  if (!(arg instanceof chat_pb.AddMessageRequest)) {
    throw new Error('Expected argument of type AddMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddMessageRequest(buffer_arg) {
  return chat_pb.AddMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatReply(arg) {
  if (!(arg instanceof chat_pb.GetChatReply)) {
    throw new Error('Expected argument of type GetChatReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatReply(buffer_arg) {
  return chat_pb.GetChatReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatRequest(arg) {
  if (!(arg instanceof chat_pb.GetChatRequest)) {
    throw new Error('Expected argument of type GetChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatRequest(buffer_arg) {
  return chat_pb.GetChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatsReply(arg) {
  if (!(arg instanceof chat_pb.GetChatsReply)) {
    throw new Error('Expected argument of type GetChatsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatsReply(buffer_arg) {
  return chat_pb.GetChatsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatsRequest(arg) {
  if (!(arg instanceof chat_pb.GetChatsRequest)) {
    throw new Error('Expected argument of type GetChatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatsRequest(buffer_arg) {
  return chat_pb.GetChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  getChats: {
    path: '/Chat/GetChats',
    requestStream: false,
    responseStream: true,
    requestType: chat_pb.GetChatsRequest,
    responseType: chat_pb.GetChatsReply,
    requestSerialize: serialize_GetChatsRequest,
    requestDeserialize: deserialize_GetChatsRequest,
    responseSerialize: serialize_GetChatsReply,
    responseDeserialize: deserialize_GetChatsReply,
  },
  getChat: {
    path: '/Chat/GetChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetChatRequest,
    responseType: chat_pb.GetChatReply,
    requestSerialize: serialize_GetChatRequest,
    requestDeserialize: deserialize_GetChatRequest,
    responseSerialize: serialize_GetChatReply,
    responseDeserialize: deserialize_GetChatReply,
  },
  addMessage: {
    path: '/Chat/AddMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.AddMessageRequest,
    responseType: chat_pb.AddMessageReply,
    requestSerialize: serialize_AddMessageRequest,
    requestDeserialize: deserialize_AddMessageRequest,
    responseSerialize: serialize_AddMessageReply,
    responseDeserialize: deserialize_AddMessageReply,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
