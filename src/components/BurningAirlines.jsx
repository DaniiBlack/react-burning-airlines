import React, {Component} from 'react';

import Nav from './Nav';
import Flight from './Flight';
import Flights from './Flights';
import Plane from './Plane';
import Reservations from './Reservations';
import Search from './Search';

class BurningAirlines extends Component {
  render() {
    return (
      <div>
        <Nav/>
      </div>
    )
  }
}

export default BurningAirlines;
