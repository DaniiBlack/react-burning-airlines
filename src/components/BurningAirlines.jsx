import axios from 'axios';
import React, {Component} from 'react';

import Nav from './Nav';
class BurningAirlines extends Component {

  // Load this from the Rails App with a login form
  state = {
    loggedIn: false,
    firstName: 'Test',
    lastName: 'User',
    isAdmin: false,
    userName: '',
    password: '',
    //remove this later
    isAdminCheck: ''
  };

  userChange = event => {
    this.setState({ userName: event.target.value });
  };

  passwordChange = event => {
    this.setState({ password: event.target.value });
  };

  // For testing only
  isAdminChange = event => {
    this.setState({ isAdminCheck: event.target.value });
  };

  handleLogin = event => {
    //stop page reloading
    event.preventDefault();
    // Convert this to AXIOS post to login then set state on response
    this.setState({
      firstName: this.state.userName,
      loggedIn: true,
      isAdmin: this.state.isAdminCheck
    });
  };

  render() {
    if(this.state.loggedIn) {
      return (
        <div>
          <Nav isAdmin={this.state.isAdmin} firstName={this.state.firstName}/>
        </div>
      )
    }
    else {
      return (
        <div>
          <form onSubmit={this.handleLogin}>
            <label>
              User Name:
              <input type="text" name="inputUserName" onChange={this.userChange} />
            </label>
            <label>
              Password:
            <input type="password" name="inputPassword" onChange={this.passwordChange} />
            </label>
            <label>
              Admin Check (Remove later):
            <input type="checkbox" name="inputIsAdminCheck" onChange={this.isAdminChange} />
            </label>
            <button type="submit">Login!</button>
          </form>
        </div>
      )
    }
  }
}

export default BurningAirlines;
