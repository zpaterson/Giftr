import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Main from './views/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

// import { makeMainRoutes } from './routes';

// const routes = makeMainRoutes();

// ReactDOM.render(
//     routes,
//     document.getElementById('root')
// );