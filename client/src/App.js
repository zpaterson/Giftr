import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/navbar';
import Search from './components/search/search';
import Products from './components/products/products';
import Signup from './components/signup/signup';


class App extends Component {
  state = { products: [] }

  getEtsyData(){
    fetch('/etsy', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    // .then(res => res.json())

      // histor.push bc in react, otherwise redirect
      .then(res => console.log(res))
    // .catch(err => {
    //     console.log(err);
    // })
  }

  render() { 
    this.getEtsyData();
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
          <Products />
          <Signup />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;