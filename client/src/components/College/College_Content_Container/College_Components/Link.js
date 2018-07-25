import React from "react";
import "../../College.css";

const Link = props => (
    <span>
        <span class="icontainer">Link: </span>
        <span class="state_name">{props.link}</span><br />
    </span>
);


export default Link;