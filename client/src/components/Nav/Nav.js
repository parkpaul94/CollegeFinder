import React from "react";
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import "./Nav.css";

const Nav = () => (
  <nav>
    <div className="nav-wrapper nav-color">
      <Logo text="school" />
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