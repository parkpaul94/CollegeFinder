import React from "react";
import "./Login_Form.css";

const Login_Form = () => (

<div class="container">
    <div class="login_container">
        <h4 class="center">Log In</h4><hr />
        <div class="col-md-3 mb-3">
            <form id="signin" name="signin" method="post" action="/signin">
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
                </div></div>
                <button type="submit" class="btn btn-login btn-primary waves-effect waves-light col s12">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
);


export default Login_Form;
