import React from "react";
import "../../College.css";
import { Link } from "react-router-dom";

const CButton = props => (
    <div class={props.className}>
    <Link to={props.to}>{props.text}</Link>
    </div>
);


export default CButton;