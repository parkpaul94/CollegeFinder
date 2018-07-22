import React from "react";
import './Jumbotron.css'

const Jumbotron = ({ children }) => (
  <div className="jumbotron">
    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  {children}</strong></h1>
  </div>
);

export default Jumbotron;

