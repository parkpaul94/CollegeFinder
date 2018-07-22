import React from "react";
import "../../College.css";

const State = props => (
    <span>
        <span class="icontainer">State: </span>
        <span class="state_name">{props.state}</span><br />
    </span>
);


export default State;