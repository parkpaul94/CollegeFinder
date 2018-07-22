import React from "react";
import "../../College.css";

const Type = props => (
    <span>
        <span class="icontainer">Type: </span>
        <span class="state_name">{props.type}</span><br />
    </span>
);


export default Type;