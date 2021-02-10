import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styled from "./NavigationItems.module.scss";
import PropTypes from "prop-types";

const NavigationItems = (props) => {
  let styleItems = [styled.Items];
  if (props.show) {
    styleItems = [styled.Items, styled.Active];
  }


  return (
    <ul className={styleItems.join(" ")}>
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>Feature</NavigationItem>
      <NavigationItem>Partners</NavigationItem>
      <NavigationItem>Blog</NavigationItem>
      <NavigationItem>Reviews</NavigationItem>
      <NavigationItem>Contact</NavigationItem>
    </ul>
  );
};

NavigationItems.propTypes = {
  show: PropTypes.bool,
};

export default NavigationItems;
