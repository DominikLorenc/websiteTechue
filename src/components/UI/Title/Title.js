import React from "react";
import styled from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={styled.Title}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Title;
