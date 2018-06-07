import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import MenuBar from './components/MenuBar';
import Home from './views/Home';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="view-container">
          <MenuBar auth={auth} />
          {/* Routes map to Views
              -- each component under View is the main content area for that route
          */}
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>


      </Router>
  );
}
