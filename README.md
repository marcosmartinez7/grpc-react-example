# gRPC-react-example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PoC

Having a Greeter service implemented on a node js and a Envoy proxy server, create a react application that implements the Greeter service client. 

![Alt text](https://grpc.io/img/grpc-web-proxy.png)


To implement the service client we use https://github.com/grpc/grpc-web

Grpc web overview: https://github.com/grpc/grpc-web/

HelloWorld example: https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld

Note: the example has the full code but the `./helloworld_pb.js` and `./helloworld_grpc_web_pb.js` that must be generated (See step by step guide) 

This project is a merge of CRA and the HelloWorld example

# Step by step guide

1. Git clone the project
2. Npm/yarn install 
3. Run node.js server backend (runs at 9090): `node server.js`
4. 


# Interesting links

- Roadmap https://github.com/grpc/grpc-web/blob/master/ROADMAP.md
- 
