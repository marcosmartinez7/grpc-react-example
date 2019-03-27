import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

const {HelloRequest} = require('./helloworld_pb.js');

var client = new GreeterClient('http://' + window.location.hostname + ':8080',
    null, null);



class App extends Component {

  componentDidMount() {
    var request = new HelloRequest();
    request.setName('Marcos');

    client.sayHello(request, {}, (err, response) => {
      console.log(response.getMessage());
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
