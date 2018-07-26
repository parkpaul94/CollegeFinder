import React from "react";
import { Link } from "react-router-dom";


// Destructuring the type, className, children and onClick props, applying them to the button element
const ButtonLink = ({ type = "default", className, children, onClick, link }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg", `btn-${type}`, className].join(" ")}
  >
   <Link to={link}>{children}</Link>
  </button>
);

export default ButtonLink;