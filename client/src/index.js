// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Main from './Main';
//import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
//import Search from './src/components/Search';


// ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();

// import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);