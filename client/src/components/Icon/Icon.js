import React from "react";
import './Icon.css'

const Icon = (props) => (
    <li><a id={props.id} href={"/" + props.pageName}>
    <i className="material-icons">{props.text}</i></a></li>
);

export default Icon;