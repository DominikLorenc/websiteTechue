import React from "react";
import logo from "../../../assets/logo.png";
import styled from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styled.Logo}>
      <a href={"/"}>
        <img src={logo} alt={"logo"} />
      </a>
    </div>
  );
};

export default Logo;
