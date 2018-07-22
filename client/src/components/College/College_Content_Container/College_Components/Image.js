import React from "react";
import "../../College.css";

const Image = props => (
    <div class="image_container">
        <img src={props.image} alt={props.name} />
    </div> 
);


export default Image;