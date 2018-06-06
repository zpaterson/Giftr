import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
// eslint-disable-next-line
import NavBar from './components/navbar/navbar';
import Search from './components/search/search';
import Products from './components/products/products';
import Signup from './components/signup/signup';



class App extends Component {

  // 0Auth route
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  // state for Giftr
  state = { products: [] }

  render() { 

    const { isAuthenticated } = this.props.auth;

    return (

      // 0Auth code
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                  </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      <MuiThemeProvider>

          <NavBar />
          <Search />
          <Products />
          <Signup />
        
      </MuiThemeProvider>
      </div >
    );
  }
}

export default App;