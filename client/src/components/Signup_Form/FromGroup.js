import React from "react";
import { Row } from "../../components/Grid";
import "./FormGroup.css";

const FormGroup = (props) => (

    <div className={props.divClass}>
        <Row>
            <i className={props.iClass}>{props.iValue}</i>
            <label htmlFor={props.name}>{props.lableName}}</label>
            <input type="text" className="form-control" name={props.name} aria-describedby={props.aria} />
        </Row>
    </div>
);

export default FormGroup;
