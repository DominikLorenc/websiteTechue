import React from "react";
import styled from "./Feature.module.scss";

const Feature = (props) => {
  return (
    <div className={styled.Feature}>
      <div>
        <img className={styled.ImgFeature} src={props.img} alt={props.alt} />
      </div>
      <div className={styled.FeatureContent}>
        <h3 className={styled.Title}>{props.title}</h3>
        <p className={styled.Description}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
