import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';


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