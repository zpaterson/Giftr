import React, { Component } from 'react';
import { Navbar, Button, Nav, Glyphicon, NavItem } from 'react-bootstrap';
import './signup.css';


class Signup extends Component {
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
            <div className="SearchBar">
                <Navbar fluid className="Menubar">
                    <Navbar.Header>
                        <Navbar.Brand>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem href="/">
                            <Glyphicon glyph="gift" />
                        </NavItem>
                        {
                            !isAuthenticated() && (
                                <NavItem className="Login" onClick={this.login.bind(this)}>
                                    Log In
                                </NavItem>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <NavItem onclick={this.goTo.bind(this, "profile")}>
                                    Profile
                                </NavItem>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <NavItem onclick={this.logout.bind(this, "logout")}>
                                    Log Out
                                </NavItem>
                            )
                        }
                    </Nav>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
    // state = {};

//     handleSubmit(event) {
//         event.preventDefault();
//         console.log("hey what's up");
//         const firstName = event.target.firstName.value;
//         const lastName = event.target.lastName.value
//         const email = event.target.email.value
//         const password = event.target.password.value

//         console.log(firstName, lastName, password, email);

//         fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 firstName: firstName,
//                 lastName: lastName,
//                 password: password,
//                 email: email
//             })
//         }).then(res => res.text())

//             // histor.push bc in react, otherwise redirect
//             .then(res => console.log(res))
//         // .catch(err => {
//         // console.log(err);
//         // })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} method="POST">
//                 <label htmlFor="firstName">First Name</label>
//                 <input id="firtName" name="firstName" type="text" autoComplete="given-name" />

//                 <label htmlFor="lastName">Last Name</label>
//                 <input id="lastName" name="lastName" type="text" autoComplete="family-name" />

//                 <label htmlFor="password">password</label>
//                 <input id="password" name="password" type="text" autoComplete="password" />

//                 <label htmlFor="email">Email</label>
//                 <input id="email" name="email" type="email" autoComplete="email" />

//                 <button>Send data!</button>
//             </form>
//         );
//     }
// }

export default Signup;