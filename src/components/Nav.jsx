import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
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
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
        </nav>
    );
}

export default Nav;