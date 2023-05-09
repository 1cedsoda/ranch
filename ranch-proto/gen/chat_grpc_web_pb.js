/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.19.1
// source: chat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetChatsRequest,
 *   !proto.GetChatsReply>}
 */
const methodDescriptor_Chat_GetChats = new grpc.web.MethodDescriptor(
  '/Chat/GetChats',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GetChatsRequest,
  proto.GetChatsReply,
  /**
   * @param {!proto.GetChatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetChatsReply.deserializeBinary
);


/**
 * @param {!proto.GetChatsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetChatsReply>}
 *     The XHR Node Readable Stream
 */
proto.ChatClient.prototype.getChats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Chat/GetChats',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChats);
};


/**
 * @param {!proto.GetChatsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetChatsReply>}
 *     The XHR Node Readable Stream
 */
proto.ChatPromiseClient.prototype.getChats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Chat/GetChats',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetChatRequest,
 *   !proto.GetChatReply>}
 */
const methodDescriptor_Chat_GetChat = new grpc.web.MethodDescriptor(
  '/Chat/GetChat',
  grpc.web.MethodType.UNARY,
  proto.GetChatRequest,
  proto.GetChatReply,
  /**
   * @param {!proto.GetChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetChatReply.deserializeBinary
);


/**
 * @param {!proto.GetChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetChatReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetChatReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatClient.prototype.getChat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Chat/GetChat',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChat,
      callback);
};


/**
 * @param {!proto.GetChatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetChatReply>}
 *     Promise that resolves to the response
 */
proto.ChatPromiseClient.prototype.getChat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Chat/GetChat',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddMessageRequest,
 *   !proto.AddMessageReply>}
 */
const methodDescriptor_Chat_AddMessage = new grpc.web.MethodDescriptor(
  '/Chat/AddMessage',
  grpc.web.MethodType.UNARY,
  proto.AddMessageRequest,
  proto.AddMessageReply,
  /**
   * @param {!proto.AddMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddMessageReply.deserializeBinary
);


/**
 * @param {!proto.AddMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddMessageReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddMessageReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatClient.prototype.addMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Chat/AddMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_AddMessage,
      callback);
};


/**
 * @param {!proto.AddMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddMessageReply>}
 *     Promise that resolves to the response
 */
proto.ChatPromiseClient.prototype.addMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Chat/AddMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_AddMessage);
};


module.exports = proto;

