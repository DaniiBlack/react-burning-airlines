import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Airplanes from './Airplanes.jsx';
import Reservations from './Reservations.jsx';
import Flights from './Flights.jsx';
import Flight from './Flight.jsx';
import Search from './Search.jsx';

class Nav extends Component {
  render() {
    const links = navLinks(this.props.isAdmin, this.props.firstName);
    return (
      <Router>
        <div className="App">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {links}
            </ul>
          </nav>

          <Switch>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Airplanes">
              <Airplanes />
            </Route>
            <Route path="/Reservations">
              <Reservations />
            </Route>
            <Route path="/Flights">
              <Flights />
            </Route>
            <Route path="/">
              <div>Home Page</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function navLinks(isAdmin, name='User') {
  if (isAdmin) {
    return (
      <>
        <li>
          <Link to="/airplanes">Airplanes</Link>
        </li>
        <li>
          <Link to="/flights">Flights</Link>
        </li>
        <li>
          Admin
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          {name}
        </li>
      </>
    );
  }
}

export default Nav;
