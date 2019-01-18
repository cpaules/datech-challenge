import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import './App.css';
import history from './history';
import HomePage from '../src/containers/HomePage'
import LoginPage from '../src/containers/LoginPage'
import SignUpPage from '../src/containers/SignUpPage'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
