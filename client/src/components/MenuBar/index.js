import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './menubar.css';


export default class MenuBar extends Component {
    login = () => {
        this.props.auth.login();
    }

    logout = () => {
        this.props.auth.logout();
    }


    render(){
        const { isAuthenticated } = this.props.auth;

        return (
        <Navbar fluid className="site-main">
            <Navbar.Header>
                <Navbar.Brand>
                    <span>Giftr</span>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href='/'>
                    Home
            </NavItem>
                {isAuthenticated()
                    ? <NavItem onClick={this.logout}>
                        Log Out
                </NavItem>
                    : <NavItem onClick={this.login}>
                        Log In
                </NavItem>
                }
            </Nav>
        </Navbar>
        );
    }
}
