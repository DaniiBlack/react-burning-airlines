import React, {Component} from 'react';

import Nav from './Nav';
class BurningAirlines extends Component {

  // Load this from the Rails App with a login form
  state = {
    loggedIn: false,
    firstName: 'Test',
    lastName: 'User',
    isAdmin: false
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
          Login page goes here
        </div>
      )
    }
  }
}

export default BurningAirlines;
