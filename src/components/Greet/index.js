import React from "react";

function Greet(props) {
    return (
        <p>
        Hola Mundo{props.firstName} {props.lastName}
    </p>
    );
}


export default Greet;
