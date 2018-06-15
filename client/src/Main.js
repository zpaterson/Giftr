import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron, Navbar, Button } from 'react-bootstrap';
import Search from './components/Search';
import Signup from './components/Signup';
import './Main.css';


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
            <Signup auth={this.props.auth} history={this.props.history} />
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

