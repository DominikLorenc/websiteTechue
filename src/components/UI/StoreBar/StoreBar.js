import React from "react";
import styled from "./StoreBar.module.scss";
import appleLogo from "../../../assets/apple_icon.png";
import playLogo from "../../../assets/gplay_icon.png";

const StoreBar = (prosp) => {
  return (
    <div className={styled.StoreBar}>
      <a href={"/"}>
        <img src={appleLogo} alt={"logo Apple"} />
      </a>
      <a href={"/"}>
        <img src={playLogo} alt={"logo Google Play"} />
      </a>
    </div>
  );
};

export default StoreBar;
