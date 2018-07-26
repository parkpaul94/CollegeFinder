import React from "react";

// This Container component allows us to use a bootstrap container without worrying about class names
const Contain = props => (
  <div>
    {props.collegeName}
  </div>
);

export default Contain;
