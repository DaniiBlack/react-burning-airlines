import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/app.css';
import Airplanes from './Airplanes.jsx';
import Reservations from './Reservations.jsx';
import Flights from './Flights.jsx';
import Flight from './Flight.jsx';

function App() {
  return (
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
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Airplanes">
            <Airplanes />
          </Route>
          <Route path="/Reservations">
            <Reservations />
          </Route>
          <Route path="/Flights">
            <Flights />
            <Route path="/Flight">
            <Flight />
          </Route>
          <Route path="/">
            <div> Home Page </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
