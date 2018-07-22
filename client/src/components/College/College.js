import React from "react";
import "./College.css";
import Name from "./College_Content_Container/College_Components/Name"
import Image from "./College_Content_Container/College_Components/Image"
import Scores from "./College_Content_Container/College_Components/Scores"
import State from "./College_Content_Container/College_Components/State"
import Type from "./College_Content_Container/College_Components/Type"
import CButton from "./College_Content_Container/College_Components/CButton"

const College = () => (
<div class="college_container">
    {/* <div class="college_name">University of Maryland
        <hr class="divider" />
    </div> */}
    <Name />
    {/* <div class="image_container">
        <img src="https://pbs.twimg.com/profile_images/998977611144445953/hknvMM_W_400x400.jpg" alt="University of Maryland" />
    </div>  */}
    <Image />
    <div class="info_container">
        {/* <span class="icontainer">State: </span>
            <span class="state_name">Maryland</span><br />
        <span class="icontainer">SAT: </span>
            <span class="test_scores">1100</span><br />
        <span class="icontainer">Type: </span>
            <span class="school_type">Public</span> */}
            <State />
            <Scores />
            <Type />
    </div>
    <div class="button_container">
        {/* <div class="add_button button">Add To List </div> */}
        <CButton 
          className="button add_button"
          text="Add To List"/>
        {/* <div class="more_button button">More Info </div> */}
        <CButton 
          className="button more_button"
          text="More Info"/>
        </div>
    </div>
);


export default College;