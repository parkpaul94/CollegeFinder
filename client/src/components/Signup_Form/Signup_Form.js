import React from "react";
import "./Signup_Form.css";

const Signup_Form = () => (
<div class="container">
    <div class="signup_container">
    <h3>Sign Up</h3>
        <form id="signup" name="signup" method="post" action="/signup">
            <div class="row">
                <div class="col s12">
                    <div class="row">
                        <p class="flat-text small"></p>
                            <div class="input-field col s6">
                                <div class="row">
                                    <i class="material-icons prefix">person</i>
                                    <label for="firstname">First Name</label>
                                    <input type="text" class="form-control" name="firstname" />
                                </div>
                            </div>
                                    {/* <div class="input-field col s6">
                                        <label for="firstname">First Name</label>
                                        <input type="text" class="form-control" name = "firstname" />
                                    </div> */}
                                    {/* <div class="input-field col s6">
                                        <label for="lastname">Last name</label>
                                        <input type="text" class="form-control" name = "lastname" />
                                    </div> */}
                            <div class="input-field col s6">
                                <div class="row">
                                    <i class="material-icons prefix">person</i>
                                    <label for="lastname">Last Name</label>
                                    <input type="text" class="form-control" name="lastname" />
                                </div>
                            </div>
                    </div>

                <div class="row">
                <div class="input-field col s12">
                    <div class="row">
                        <i class="material-icons prefix">mail_outline</i>
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" />
                    </div>
                </div>
                    <div class="input-field col s12">
                    <div class="row">
                        <i class="material-icons prefix">lock_outline</i>
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" />
                    </div>
                    </div>
                    </div>
                    <div class="row">
                        <button id ="reg_submit" class="btn waves-effect waves-light grey darken-4 btn-signup" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                    </div>
            </div>
        </form>
    </div>
</div>
);


export default Signup_Form;
