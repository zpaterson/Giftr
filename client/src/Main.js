import React, { Component } from 'react';
import { Jumbotron, Navbar, Button } from 'react-bootstrap';
import './Main.css';
import Search from './components/Search';
//import Signup from './components/Signup';


class Main extends React.Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
    
            <Jumbotron>
                <div className="main-cta">
                    <div className="main-search">
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
                                            bsStyle="primary"
                                            className="btn-margin"
                                            onClick={this.goTo.bind(this, 'profile')}
                                        >
                                            Profile
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
                                <h1>Giftr</h1>
                                <p>Hello from home</p>

                                <Search />
                            </Navbar.Header>
                        </Navbar>
                        <div className="container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                </Jumbotron>

        );
    }

}

export default Main;

