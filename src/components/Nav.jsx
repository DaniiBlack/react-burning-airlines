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
    if(this.props.isAdmin) {
      return(
        <Router>
          <div className="App">
            <nav className="App-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/airplanes">Airplanes</Link>
                </li>
                <li>
                  <Link to="/flights">Flights</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  Admin
                </li>
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
                <div> Home Page for Admin </div>
              </Route>
            </Switch>
          </div>
        </Router>
    )}
    else {
      return (<Router>
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
                  {this.props.firstName}
                </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Reservations">
            <Reservations />
          </Route>
          <Route path="/">
            <div> Home Page for User </div>
          </Route>
        </Switch>
      </div>
    </Router>
      )};

  }
}
export default Nav;
