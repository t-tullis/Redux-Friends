import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <h2>HomePage App JS</h2>
          <ul>
            <li>
              <Link to='/login'>Log in</Link>
            </li>
          </ul>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path='/friends-list' component={FriendsList} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
