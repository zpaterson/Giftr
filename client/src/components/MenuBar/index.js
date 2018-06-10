// import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import './menubar.css';

// class MenuBar extends Component {

//      <Navbar fluid className="site-main">
//             <Navbar.Header>
//                 <Navbar.Brand>
//                     <a href="#">Giftr</a>
//                 </Navbar.Brand>
//             </Navbar.Header>
//             <Nav> 
//     <NavItem href='/'>
//         Home
//     </NavItem> 
//  {
//     isAuthenticated()
//      ? <NavItem onClick={this.logout}>
//         Log Out
//     </NavItem>
//     : <NavItem onClick={this.login}>
//         Log In
//         </NavItem>
//                 } 
//     </Navbar>
// //     login() {
// //         this.props.auth.login();
// //     }
// //     render() {
// //         const { isAuthenticated } = this.props.auth;
// //         return (
// //             <div className="container">
// //                 {
// //                     isAuthenticated() && (
// //                         <h4>
// //                             You are logged in! You can now view your{' '}
// //                             <Link to="profile">profile area</Link>
// //                             .
// //               </h4>
// //                     )
// //                 }
// //                 {
// //                     !isAuthenticated() && (
// //                         <h4>
// //                             You are not logged in! Please{' '}
// //                             <a
// //                                 style={{ cursor: 'pointer' }}
// //                                 onClick={this.login.bind(this)}
// //                             >
// //                                 Log In
// //                 </a>
// //                             {' '}to continue.
// //               </h4>
// //                     )
// //                 }
// //             </div>
// //         );
// //     }
// // }

// export default MenuBar;