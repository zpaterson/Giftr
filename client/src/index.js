import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);


// import React from 'react';
// import Main from './Main';
// import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './registerServiceWorker';

// let state = {};
// window.setState = (changes) => {
//     state = Object.assign({}, state, changes);
//     ReactDOM.render(
//         <Main {...state}/>,
//         document.getElementById('root')
//     );
// }

// /* eslint no-restricted-globals: 0*/
// let initialState = {
//     location: location.pathname.replace(/^\/?|\/$/g, "")
// };

// window.setState(initialState);

// registerServiceWorker();

