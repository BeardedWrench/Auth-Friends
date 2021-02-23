import React from 'react';
import { Link, Route, Switch, useHistory} from 'react-router-dom';

import './App.css';

import PrivateRoute from './utils/PrivateRoute';

/**
 * Components
 */
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const history = useHistory();

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem( 'token' );
    history.push("/login");
  }

  return (
    <div className="App">
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li> 
        <li>{<Link><span onClick={ logout }>Logout</span></Link>}</li>
        <li><Link to="/friends">Friends List</Link></li> 
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends" component={ FriendsList } />
        <Route path="/login" component={ Login } />
        <Route component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
