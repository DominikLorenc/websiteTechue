import React from "react";
import styled from "./NaviagtionItem.module.scss";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const NavigationItem = ({ btn, children, click, id, selectedID, scrollTo }) => {
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
        <Link
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={styled.Link}
          activeClass={styled.Active}
        >
          {children}
        </Link>
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
  scrollTo: PropTypes.string
};

export default NavigationItem;
