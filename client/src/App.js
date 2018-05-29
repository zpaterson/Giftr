import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/navbar';
import Search from './components/search/search';
import Products from './components/products/products';




class App extends Component {
  state = { products: [] }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
          <Products />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;