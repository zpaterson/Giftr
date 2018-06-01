import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/navbar';
import Search from './components/search/search';
import Products from './components/products/products';
import Signup from './components/signup/signup';


class App extends Component {
  state = { products: [] }

  render() {
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