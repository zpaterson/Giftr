import React, { Component } from 'react';


class Signup extends Component {
    state = {};
    // constructor() {
    //     super();
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit(event) {
       // event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value
        const email = event.target.email.value
        const password = event.target.password.value

         console.log(firstName, lastName, password, email);

        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        // .catch(err => {
        //     console.log(err);
    // })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="/register">
                <label htmlFor="firstName">First Name</label>
                <input id="firtName" name="firstName" type="text" autoComplete="given-name" />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name"/>
                
                <label htmlFor="password">password</label>
                <input id="password" name="password" type="text" autoComplete="password"/>

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email"/>

                <button>Send data!</button>
            </form>
        );
    }
}

export default Signup;