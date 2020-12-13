import React from "react";

import styled from "./NaviagtionItem.module.scss";
import PropTypes from "prop-types";

const NavigationItem = (props) => {
  return (
    <li className={styled.Item}>
      <a className={styled.Link} href={"/#"}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
