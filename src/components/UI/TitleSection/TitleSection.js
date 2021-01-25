import React from "react";
import styled from "./TitleSection.module.scss";
import PropTypes from "prop-types";

const TitleSection = (props) => {
  return (
    <div className={styled.TitleSection}>
      <p className={styled.Subtitle}>{props.subtitle}</p>
      <h2 className={styled.Title}>{props.title}</h2>
      <p className={styled.Description}>{props.description}</p>
    </div>
  );
};

TitleSection.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default TitleSection;
