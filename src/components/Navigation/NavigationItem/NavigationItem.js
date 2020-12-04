import React from "react";

import styled from "./NaviagtionItem.module.scss";

const NavigationItem = (props) => {
  

  return (
    <li className={styled.Item}>
      <a href={"/#"}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;
