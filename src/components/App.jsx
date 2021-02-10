import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../css/app.css';
import Airplanes from './Airplanes.jsx';
import Reservations from './Reservations.jsx';
import Flights from './Flights.jsx';
import Flight from './Flight.jsx';
import Search from './Search.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
