import React from "react";

const Logo = (props) => (
    <a href="/Home" className="brand-logo center"> {props.logoname}
    <i className="material-icons">{props.text}</i></a>
);

export default Logo;