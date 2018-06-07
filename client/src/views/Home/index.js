import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './home.css';
import Search from '../../components/search';

export default class Home extends Component {

  render() {
    return (
      <Jumbotron>
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
