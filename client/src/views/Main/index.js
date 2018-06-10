import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './home.css';
import Search from '../../components/search';
import Signup from '../../components/signup/signup';
import MenuBar from '../../components/MenuBar';

export default class Home extends Component {

  render() {
    return (
      <Jumbotron>
        <MenuBar />
        <Signup />
        <div className="main-cta">
          <h1>Giftr</h1>
          <p>Hello from home</p>
          <div className="main-search">
            <Search />
          </div>
        </div>
      </Jumbotron>
    );
  }
}
