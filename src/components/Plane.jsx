import React from "react";

function Plane(props) {
  return (
    <li>
        {`Name: ${props.name} Rows: ${props.rows} columns: ${props.columns}`}
    </li>
  )
}

export default Plane;