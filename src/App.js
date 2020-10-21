import React from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Login from './components/Login/Login';
import { createContext } from 'react';
import NoMatch from './components/NoMatch/NoMatch';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Logo from './components/Logo/Logo';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


	

  return (
    <div>
      <UserContext.Provider value={([loggedInUser, setLoggedInUser])}>
      <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Logo/>
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
       </Switch>
      </Router>
    </UserContext.Provider> 
  </div>
  );
}

export default App;