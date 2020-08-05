import React from "react";
import { Badge } from "reactstrap";

function Greet({ firstName, lastName }) {
  return (
    <div>
      <p>
        Hola {this.props.firstName} {this.props.lastName} {""}
        <Badge color="secondary">New</Badge>
      </p>
    </div>
  );
}

export default Greet;
