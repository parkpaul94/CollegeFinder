import React from "react";
import "../../College.css";

const Scores = props => (
    <span>
        <span class="icontainer">SAT: </span>
        <span class="state_name">{props.score}</span><br />
    </span>
);


export default Scores;