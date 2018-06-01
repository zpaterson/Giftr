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
    // constructor() {
    //     super();
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value
        const email = event.target.email.value

         console.log(firstName, lastName, email);

        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firtName" name="firstName" type="text" />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />

                <button>Send data!</button>
            </form>
        );
    }
}

export default Signup;