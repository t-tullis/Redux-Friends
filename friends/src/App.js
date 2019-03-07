import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Nav from './components/Nav'

import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
          <h2>Redux Friends</h2>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path='/friends-list' component={FriendsList} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
