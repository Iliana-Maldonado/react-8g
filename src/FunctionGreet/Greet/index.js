import React from "react";
import { Badge } from "reactstrap";

function Greet({ firstName, lastName }) {
  return (
    <div>
      <p>
        Hola {firstName} {lastName} {""}
        <Badge color="secondary">New</Badge>
      </p>
    </div>
  );
}

export default Greet;
