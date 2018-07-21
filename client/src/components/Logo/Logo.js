import React from "react";

const Logo = (props) => (
    <a href="/" className="brand-logo center">Education4Me
    <i className="material-icons">{props.text}</i></a>
);

export default Logo;