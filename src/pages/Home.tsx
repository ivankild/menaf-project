import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../logo.svg';

const Home = () => {
  return <Jumbotron>
    <h1>Home</h1>
    <img src={logo} className="App-logo" alt="logo"/>
  </Jumbotron>
}

export default Home;
