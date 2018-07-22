import React from "react";
import { Col, Row, Container } from "../../components/Grid";

import "./Signup_Form.css";

const Signup_Form = () => (
    <Container>
        <div className="signup_container">
            <h3>Sign Up</h3>
            <form id="signup" name="signup" method="post" action="/signup">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <p className="flat-text small"></p>
                            <div className="input-field col s6">
                                <Row>
                                    <i className="material-icons prefix">person</i>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" name="firstname" />
                                </Row>
                            </div>
                            <div className="input-field col s6">
                                <div className="row">
                                    <i className="material-icons prefix">person</i>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <Row>
                                    <i className="material-icons prefix">mail_outline</i>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                                </Row>
                            </div>
                            <div className="input-field col s12">
                                <Row>
                                    <i className="material-icons prefix">lock_outline</i>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" />
                                </Row>
                            </div>
                        </div>
                        <Row>
                            <button id="reg_submit" className="btn waves-effect waves-light grey darken-4 btn-signup" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                            </button>
                        </Row>
                    </div>
                </div>
            </form>
        </div>
    </Container>
);


export default Signup_Form;
