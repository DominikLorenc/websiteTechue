import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "./Hamburger.module.scss";

const Hamburger = (props) => {
  return (
    <IconContext.Provider
      value={{
        className: styled.Hamburger,
        size: "3rem",
        color: props.changeColor ? "white" : "#5D5D5D",
      }}
    >
      <div>
        <FaBars onClick={props.clicked} />
      </div>
    </IconContext.Provider>
  );
};

export default Hamburger;
