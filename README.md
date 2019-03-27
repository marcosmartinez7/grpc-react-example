# gRPC-react-example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PoC

Having a Greeter service implemented on a node js and a Envoy proxy server, create a react application that implements the Greeter service client. 

![Alt text](https://grpc.io/img/grpc-web-proxy.png)


To implement the service client we use https://github.com/grpc/grpc-web

Grpc web overview: https://github.com/grpc/grpc-web/

HelloWorld example: https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld (the helloworld example worked with serve but not with python http servers)

Note: the example has the full code but the `./helloworld_pb.js` and `./helloworld_grpc_web_pb.js` that must be generated (See step by step guide) 

This project is a merge of CRA and the HelloWorld example

# Step by step guide

## Prerequisites: 

You need to have installed: 

- docker
- docker-compose
- protobuffer code generators plugins binaries. For both of them download it, rename it and put them on /usr/bin folder to be recognized.
   a) `protoc`: https://github.com/protocolbuffers/protobuf/releases
   b) `protoc-gen-grpc-web`: https://github.com/grpc/grpc-web/releases
   


1. Git clone the project
2. Npm/yarn install 
3. Generate the Request, Reply and Client code: 

```
protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```  
4. After the command runs successfully, you should now see two new files generated in the current directory:

helloworld_pb.js: this contains the HelloRequest and HelloReply classes
helloworld_grpc_web_pb.js: this contains the GreeterClient class
These are also the 2 files that our client.js file imported earlier in the example.  

5.  Run node.js server backend (runs at 9090): `node server.js`
6.  Run the Envoy proxy. The envoy.yaml file configures Envoy to listen to browser requests at port :8080, and forward them to port :9090 (see above).

```
$ docker build -t helloworld/envoy -f ./envoy.Dockerfile .
$ docker run -d -p 8080:8080 --network=host helloworld/envoy
```  

7. Run the react client: `yarn start`
8. Access to localhost:8081,  check out the console, it should print the gRPC server response.






 


# Interesting links

- Roadmap https://github.com/grpc/grpc-web/blob/master/ROADMAP.md
- Basics: https://grpc.io/blog/grpc-web-ga
- Actual state of grpc web (2 implementations description) https://grpc.io/blog/state-of-grpc-web 
- Another grpc web implementation https://github.com/improbable-eng/grpc-web
- React-Redux example with it https://github.com/easyCZ/grpc-web-hacker-news

