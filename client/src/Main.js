import React, { Component } from 'react';
import { Jumbotron, Navbar, Button } from 'react-bootstrap';
import Search from './components/Search';
import './main.css'
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
            <div>
                <Navbar fluid className="site-main">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Giftr</a>
                        </Navbar.Brand>
                        <Button
                            //bsStyle="primary"
                            //className="btn-margin"
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
                    </Navbar.Header>
                </Navbar>
                    <div className="container">
                        {this.props.children}
                    </div>
            <Jumbotron>
                <div className="main-cta">
                    <h1>Giftr</h1>
                        <Search />
                </div>
            </Jumbotron>
            </div>
        );
    }

}

export default Main;

