 import React from 'react';

// class Signup extends Component {
//     state = {};



//     render() {
//         return (
//             <div>
//                 <br />
//                 <form method = 'POST' action='/register'>
//                     <input type="text" name="firstName" placeholder="First Name" />
//                     <br />
//                     <input type="text" name="lastName" placeholder="Last Name" />
//                     <br />
//                     <input type="text" name="password" placeholder="Password" />
//                     <br />
//                     <input type="text" name="confirmPassword" placeholder="Confirm Password" />
//                     <br />
//                     <input type="email" name="email" placeholder="email" />
//                     <br />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Signup;


class Signup extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        const username = event.target.username.value;
        const email = event.target.email.value
        const birthdate = event.target.birthdate.value

        // console.log(username, email, birthdate);

        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                birthdate: birthdate
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" />

                <label htmlFor="email">Enter your email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="birthdate">Enter your birth date</label>
                <input id="birthdate" name="birthdate" type="text" />

                <button>Send data!</button>
            </form>
        );
    }
}

export default Signup;