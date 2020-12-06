import React from "react";
import styled from "./ImageAnimation.module.scss";

const ImageAnimation = (props) => {
  return (
    <div className={styled.imgAnimation}>
      <img src={props.source} alt={"image"} />
    </div>
  );
};

export default ImageAnimation;
