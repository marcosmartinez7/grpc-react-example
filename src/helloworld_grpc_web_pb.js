/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.helloworld = require('./helloworld_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.HelloReply,
  /** @param {!proto.helloworld.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloReply.deserializeBinary
);


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.helloworld.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.Greeter/SayHello',
      request,
      metadata || {},
      methodInfo_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.helloworld.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.Greeter/SayHello',
      request,
      metadata || {},
      methodInfo_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.RepeatHelloRequest,
 *   !proto.helloworld.HelloReply>}
 */
const methodInfo_Greeter_SayRepeatHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.HelloReply,
  /** @param {!proto.helloworld.RepeatHelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloReply.deserializeBinary
);


/**
 * @param {!proto.helloworld.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodInfo_Greeter_SayRepeatHello);
};


/**
 * @param {!proto.helloworld.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterPromiseClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodInfo_Greeter_SayRepeatHello);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloReply>}
 */
const methodInfo_Greeter_SayHelloAfterDelay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.HelloReply,
  /** @param {!proto.helloworld.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloReply.deserializeBinary
);


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.helloworld.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayHelloAfterDelay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.Greeter/SayHelloAfterDelay',
      request,
      metadata || {},
      methodInfo_Greeter_SayHelloAfterDelay,
      callback);
};


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.helloworld.GreeterPromiseClient.prototype.sayHelloAfterDelay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.Greeter/SayHelloAfterDelay',
      request,
      metadata || {},
      methodInfo_Greeter_SayHelloAfterDelay);
};


module.exports = proto.helloworld;

