import React from "react";
import "./Collegecard.css";

const Collegecard = (props) => (

    <div class="college_content_container">

        <div className="college_container">

            <div className="image_container">
                <img src={props.image} alt={props.name} />
            </div>

            <div className="info_container">
                <span>
                    <span className="icontainer">State: </span>
                    <span className="state_name">{props.state}</span><br />
                </span>

                <span>
                    <span className="icontainer">SAT: </span>
                    <span className="state_name">{props.score}</span><br />
                </span>

                <span>
                    <span className="icontainer">Type: </span>
                    <span className="state_name">{props.type}</span><br />
                </span>
            </div>

            <div className="button_container">
                <div className={props.className}>{props.text}
                </div>
            </div>
        </div>
    </div>

);


export default Collegecard;