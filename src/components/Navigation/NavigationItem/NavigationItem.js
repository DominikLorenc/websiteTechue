import React from "react";

import styled from "./NaviagtionItem.module.scss";
import PropTypes from "prop-types";

const NavigationItem = ({ btn, children, click, id, selectedID }) => {
  let styles = [styled.Button];

  if (id === selectedID) {
    styles = [styled.Button, styled.Active];
  }

  return (
    <li className={styled.Item}>
      {btn ? (
        <button className={styles.join(" ")} onClick={click}>
          {children}
        </button>
      ) : (
        <a className={styled.Link} href="/#">
          {children}
        </a>
      )}
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  btn: PropTypes.bool,
  click: PropTypes.func,
  id: PropTypes.number,
  selectedID: PropTypes.number,
};

export default NavigationItem;
