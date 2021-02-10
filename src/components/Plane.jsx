import React from "react";

function Plane(props) {
  return (
    <li>
        {`Name: ${props.name} Rows: ${props.rows} columns: ${props.columns}`}
        <table>
            
        </table>
    </li>
  )
}

export default Plane;