import React, { Component } from "react";
import { Link } from "react-router-dom";
import College from "../../components/College/College.js"
import College_Content_Container from "../../components/College/College_Content_Container/College_Content_Container"
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

class Colleges extends Component {
	render() {
		return (
                <College_Content_Container>
                    <College />
                    <College />
                </College_Content_Container>
		);
	}
}

export default Colleges;
