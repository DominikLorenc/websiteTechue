import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styled from "./NavigationItems.module.scss";

const NavigationItems = (props) => {
  let styleItems = [styled.NavItems];
  if (props.show) {
    styleItems = [styled.NavItems, styled.Active];
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

export default NavigationItems;
