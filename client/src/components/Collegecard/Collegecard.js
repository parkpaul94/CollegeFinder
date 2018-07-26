import React from "react";
import "./Collegecard.css";
import ButtonLink from '../ButtonLink';
import Button from '../Button';

const Collegecard = (props) => (

    <div className="college_content_container">

        <div className="college_container">
            <h1 className='college_name'>{props.collegeName}</h1>
            <div className="image_container">
                <img src={props.image} alt={props.collegeName} />
            </div>

            <div className="info_container">
                <span>
                    <span className="icontainer">State: </span>
                    <span className="state_name">{props.state}</span><br />
                </span>

                <span>
                    <span className="icontainer">Cost:</span>
                    <span className="state_name">{props.annualAveCost}</span><br />
                </span>

                <span>
                    <span className="icontainer">Weblink: </span>
                    <span className="state_name">{props.weblink}</span><br />
                </span>
            </div>
                <Button
                    // onClick={''}
                    type="primary"
                    className="input-lg">
                    ADD
				</Button>
                <ButtonLink
                    // onClick={''}
                    type="primary"
                    className="input-lg"
                    link="/SingleResult">
                    MORE
				</ButtonLink>
        </div>
    </div>

);


export default Collegecard;