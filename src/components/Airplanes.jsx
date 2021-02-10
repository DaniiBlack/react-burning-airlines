import React from "react";
import axios from 'axios';
import Plane from './Plane';

class Airplanes extends React.Component {
  state = {
    airplanes: [{ name:"747", rows:30, columns:5 }], 
    name: "",
    rows: 0,
    columns: 0
  };

  nameChange = event => {
    this.setState({ name: event.target.value });
  };
  rowChange = event => {
    this.setState({ rows: event.target.value });
  };
  columnChange = event => {
    this.setState({ columns: event.target.value });
  };

  handleCreate = event => {
    event.preventDefault();
    const newPlane = {
      name: this.state.name,
      rows: this.state.rows,
      columns: this.state.columns
    }
    this.setState({airplanes: [...this.state.airplanes, ...[newPlane]]});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreate}>
          <label>
            Name:
            <input type="text" name="inputName" onChange={this.nameChange} />
          </label>
          <label>
            Rows:
          <input type="number" name="inputRows" onChange={this.rowChange} />
          </label>
          <label>
            Columns:
          <input type="number" name="inputColumns" onChange={this.columnChange} />
          </label>
          <button type="submit">Create!</button>
        </form>
        <ul>
          {
            this.state.airplanes.map(function(plane, i){
              return (
                <Plane name={plane.name} rows={plane.rows} columns={plane.columns} key={i}/>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


export default Airplanes;