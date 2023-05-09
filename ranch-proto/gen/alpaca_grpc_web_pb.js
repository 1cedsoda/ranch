/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.19.1
// source: alpaca.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./alpaca_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.AlpacaClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
proto.AlpacaPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 *   !proto.GetStateRequest,
 *   !proto.GetStateResponse>}
 */
const methodDescriptor_Alpaca_GetState = new grpc.web.MethodDescriptor(
  '/Alpaca/GetState',
  grpc.web.MethodType.UNARY,
  proto.GetStateRequest,
  proto.GetStateResponse,
  /**
   * @param {!proto.GetStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStateResponse.deserializeBinary
);


/**
 * @param {!proto.GetStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AlpacaClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Alpaca/GetState',
      request,
      metadata || {},
      methodDescriptor_Alpaca_GetState,
      callback);
};


/**
 * @param {!proto.GetStateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetStateResponse>}
 *     Promise that resolves to the response
 */
proto.AlpacaPromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Alpaca/GetState',
      request,
      metadata || {},
      methodDescriptor_Alpaca_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetStateRequest,
 *   !proto.GetStateResponse>}
 */
const methodDescriptor_Alpaca_StreamState = new grpc.web.MethodDescriptor(
  '/Alpaca/StreamState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GetStateRequest,
  proto.GetStateResponse,
  /**
   * @param {!proto.GetStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStateResponse.deserializeBinary
);


/**
 * @param {!proto.GetStateRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.AlpacaClient.prototype.streamState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Alpaca/StreamState',
      request,
      metadata || {},
      methodDescriptor_Alpaca_StreamState);
};


/**
 * @param {!proto.GetStateRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.AlpacaPromiseClient.prototype.streamState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Alpaca/StreamState',
      request,
      metadata || {},
      methodDescriptor_Alpaca_StreamState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PromptRequest,
 *   !proto.PromptResponse>}
 */
const methodDescriptor_Alpaca_Prompt = new grpc.web.MethodDescriptor(
  '/Alpaca/Prompt',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.PromptRequest,
  proto.PromptResponse,
  /**
   * @param {!proto.PromptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PromptResponse.deserializeBinary
);


/**
 * @param {!proto.PromptRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.PromptResponse>}
 *     The XHR Node Readable Stream
 */
proto.AlpacaClient.prototype.prompt =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Alpaca/Prompt',
      request,
      metadata || {},
      methodDescriptor_Alpaca_Prompt);
};


/**
 * @param {!proto.PromptRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.PromptResponse>}
 *     The XHR Node Readable Stream
 */
proto.AlpacaPromiseClient.prototype.prompt =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Alpaca/Prompt',
      request,
      metadata || {},
      methodDescriptor_Alpaca_Prompt);
};


module.exports = proto;

