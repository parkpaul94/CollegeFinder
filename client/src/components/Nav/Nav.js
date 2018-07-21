import React from "react";
import Icon from '../Icon/Icon.js';
import Logo from '../Logo/Logo.js';
import "./Nav.css";

const Nav = () => (
  <nav>
    <div className="nav-wrapper nav-color">
      <Logo text="school" logoname ='Education4Me' />
      <ul className="right">
        <Icon pageName="list" text="list" />
        <Icon pageName="search" text="search" />
        <Icon pageName="profile" text="account_box" />
        <Icon id="modal-trigger" pageName="login" text="lock_open" />
      </ul>
    </div>
  </nav>
);

export default Nav;
