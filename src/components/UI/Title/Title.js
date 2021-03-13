import React from "react";
import styled from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={styled.TitleSection}>
      <h1 className={styled.Title}>{props.title}</h1>
      <p className={styled.Subtitle}>{props.description}</p>
    </div>
  );
};

export default Title;
