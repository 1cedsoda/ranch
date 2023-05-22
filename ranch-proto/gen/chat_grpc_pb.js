// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_AddMessageRequest(arg) {
  if (!(arg instanceof chat_pb.AddMessageRequest)) {
    throw new Error('Expected argument of type AddMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddMessageRequest(buffer_arg) {
  return chat_pb.AddMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddMessageResponse(arg) {
  if (!(arg instanceof chat_pb.AddMessageResponse)) {
    throw new Error('Expected argument of type AddMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddMessageResponse(buffer_arg) {
  return chat_pb.AddMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateChatRequest(arg) {
  if (!(arg instanceof chat_pb.CreateChatRequest)) {
    throw new Error('Expected argument of type CreateChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateChatRequest(buffer_arg) {
  return chat_pb.CreateChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateChatResponse(arg) {
  if (!(arg instanceof chat_pb.CreateChatResponse)) {
    throw new Error('Expected argument of type CreateChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateChatResponse(buffer_arg) {
  return chat_pb.CreateChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatMessagesRequest(arg) {
  if (!(arg instanceof chat_pb.GetChatMessagesRequest)) {
    throw new Error('Expected argument of type GetChatMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatMessagesRequest(buffer_arg) {
  return chat_pb.GetChatMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetChatMessagesResponse(arg) {
  if (!(arg instanceof chat_pb.GetChatMessagesResponse)) {
    throw new Error('Expected argument of type GetChatMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatMessagesResponse(buffer_arg) {
  return chat_pb.GetChatMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_GetChatsResponse(arg) {
  if (!(arg instanceof chat_pb.GetChatsResponse)) {
    throw new Error('Expected argument of type GetChatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetChatsResponse(buffer_arg) {
  return chat_pb.GetChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetChatTitleRequest(arg) {
  if (!(arg instanceof chat_pb.SetChatTitleRequest)) {
    throw new Error('Expected argument of type SetChatTitleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetChatTitleRequest(buffer_arg) {
  return chat_pb.SetChatTitleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetChatTitleResponse(arg) {
  if (!(arg instanceof chat_pb.SetChatTitleResponse)) {
    throw new Error('Expected argument of type SetChatTitleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetChatTitleResponse(buffer_arg) {
  return chat_pb.SetChatTitleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  createChat: {
    path: '/Chat/CreateChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.CreateChatRequest,
    responseType: chat_pb.CreateChatResponse,
    requestSerialize: serialize_CreateChatRequest,
    requestDeserialize: deserialize_CreateChatRequest,
    responseSerialize: serialize_CreateChatResponse,
    responseDeserialize: deserialize_CreateChatResponse,
  },
  getChats: {
    path: '/Chat/GetChats',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetChatsRequest,
    responseType: chat_pb.GetChatsResponse,
    requestSerialize: serialize_GetChatsRequest,
    requestDeserialize: deserialize_GetChatsRequest,
    responseSerialize: serialize_GetChatsResponse,
    responseDeserialize: deserialize_GetChatsResponse,
  },
  streamChats: {
    path: '/Chat/StreamChats',
    requestStream: false,
    responseStream: true,
    requestType: chat_pb.GetChatsRequest,
    responseType: chat_pb.GetChatsResponse,
    requestSerialize: serialize_GetChatsRequest,
    requestDeserialize: deserialize_GetChatsRequest,
    responseSerialize: serialize_GetChatsResponse,
    responseDeserialize: deserialize_GetChatsResponse,
  },
  getChatMessages: {
    path: '/Chat/GetChatMessages',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetChatMessagesRequest,
    responseType: chat_pb.GetChatMessagesResponse,
    requestSerialize: serialize_GetChatMessagesRequest,
    requestDeserialize: deserialize_GetChatMessagesRequest,
    responseSerialize: serialize_GetChatMessagesResponse,
    responseDeserialize: deserialize_GetChatMessagesResponse,
  },
  setChatTitle: {
    path: '/Chat/SetChatTitle',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.SetChatTitleRequest,
    responseType: chat_pb.SetChatTitleResponse,
    requestSerialize: serialize_SetChatTitleRequest,
    requestDeserialize: deserialize_SetChatTitleRequest,
    responseSerialize: serialize_SetChatTitleResponse,
    responseDeserialize: deserialize_SetChatTitleResponse,
  },
  addMessage: {
    path: '/Chat/AddMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.AddMessageRequest,
    responseType: chat_pb.AddMessageResponse,
    requestSerialize: serialize_AddMessageRequest,
    requestDeserialize: deserialize_AddMessageRequest,
    responseSerialize: serialize_AddMessageResponse,
    responseDeserialize: deserialize_AddMessageResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
