import React from "react";
import axios from 'axios';
import Plane from './Plane';

class Airplanes extends React.Component {
  constructor() {
    super();
    this.state = {
      airplanes: [],
      name: "",
      rows: 0,
      columns: 0
    }
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleRowChange = this._handleRowChange.bind(this);
    this._handleColumnChange = this._handleColumnChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameChange(event) {
    this.setState({ name: event.target.value });
  };

  _handleRowChange(event) {
    this.setState({ rows: event.target.value });
  };

  _handleColumnChange(event) {
    this.setState({ columns: event.target.value });
  };

  _handleSubmit(event) {
    event.preventDefault();
    // this.props.onSubmit(this.state.content);
    const airplane = {
      name: this.state.name,
      rows: this.state.rows,
      columns: this.state.rows
    }
    this.setState({airplanes: [...this.state.airplanes, airplane]});
  }

  render() {
    return (
      <div>
        <h2>Burning Airlines</h2>
        <form>
          Name:
          <input type="text" onChange={this._handleNameChange} value={this.state.content}/>
          Rows:
          <input type="text" onChange={this._handleRowChange} value={this.state.content}/>
          Columns:
          <input type="text" onChange={this._handleColumnChange} value={this.state.content}/>
          <input type="submit" onSubmit={this._handleSubmit} value={'Submit'}/>
        </form>
        <p>{this.state.name}</p>
        <p>{this.state.rows}</p>
        <p>{this.state.columns}</p>
        <Seats rows={this.state.rows} columns={this.state.columns} />
      </div>
    );
  }
}

const Seats = (props) => {
  let grid = [];
  for (let i = 1; i <= props.rows; i++) {
    const columnsArray = [];
    for (let j = 1; j <= props.columns; j++) {
      columnsArray.push(<td>{(i + 9).toString(36).toUpperCase() + j.toString()}</td>);
    }
    grid.push(<tr>{columnsArray}</tr>);
  }
  return (
    <table>
      {grid}
    </table>
  );
}

  // state = {
  //   airplanes: [{ name:"747", rows:30, columns:5 }],
  //   name: "",
  //   rows: 0,
  //   columns: 0
  // };
  //
  // nameChange = event => {
  //   this.setState({ name: event.target.value });
  // };
  // rowChange = event => {
  //   this.setState({ rows: event.target.value });
  // };
  // columnChange = event => {
  //   this.setState({ columns: event.target.value });
  // };
  //
  // handleCreate = event => {
  //   event.preventDefault();
  //   const newPlane = {
  //     name: this.state.name,
  //     rows: this.state.rows,
  //     columns: this.state.columns
  //   }
  //   this.setState({airplanes: [...this.state.airplanes, ...[newPlane]]});
  // };
  //
  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleCreate}>
  //         <label>
  //           Name:
  //           <input type="text" name="inputName" onChange={this.nameChange} />
  //         </label>
  //         <label>
  //           Rows:
  //         <input type="number" name="inputRows" onChange={this.rowChange} />
  //         </label>
  //         <label>
  //           Columns:
  //         <input type="number" name="inputColumns" onChange={this.columnChange} />
  //         </label>
  //         <button type="submit">Create!</button>
  //       </form>
  //       <ul>
  //         {
  //           this.state.airplanes.map(function(plane, i){
  //             return (
  //               <Plane name={plane.name} rows={plane.rows} columns={plane.columns} key={i}/>
  //             )
  //           })
  //         }
  //       </ul>
  //     </div>
  //   );
  // }
// }


export default Airplanes;
