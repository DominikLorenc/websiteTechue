import React from "react";
import styled from "./ImageAnimation.module.scss";
import PropTypes from "prop-types";

const ImageAnimation = (props) => {
  return (
    <div className={styled.ImgAnimation}>
      <img className={styled.Image} src={props.source} alt={"phone"} />
    </div>
  );
};

ImageAnimation.propTypes = {
  source: PropTypes.string.isRequired,
};

export default ImageAnimation;
