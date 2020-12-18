import React from "react";
import styled from "./StoreBar.module.scss";
import appleLogo from "../../../assets/apple_icon.png";
import playLogo from "../../../assets/gplay_icon.png";

const StoreBar = (prosp) => {
  return (
    <div className={styled.StoreBar}>
      <a className={styled.Link} href={"/"}>
        <img className={styled.Image} src={appleLogo} alt={"logo Apple"} />
      </a>
      <a className={styled.Link} href={"/"}>
        <img className={styled.Image} src={playLogo} alt={"logo Google Play"} />
      </a>
    </div>
  );
};

export default StoreBar;
