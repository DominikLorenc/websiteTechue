import React, { useState } from "react";
import NavigationItems from "./NaviagtionItems/NavigationItems";
import styled from "./Navigation.module.scss";
import Logo from "../UI/Logo/Logo";
import Hamburger from "../UI/Hamburger/Hamburger";

const Navigation = (props) => {
  const [activeNavigation, setActiveNaviagtion] = useState(false);

  const openNavigation = () => {
    setActiveNaviagtion(!activeNavigation);
  };

  const [scrollDown, setScrollDown] = useState(null);

  window.addEventListener("scroll", (e) => {
    window.scrollY ? setScrollDown(true) : setScrollDown(null);
  });

  let styleHeader = [styled.Header];
  if (scrollDown) {
    styleHeader = [styled.Header, styled.Active];
  }

  return (
    <header className={styleHeader.join(" ")}>
      <Logo />
      <Hamburger changeColor={scrollDown} clicked={openNavigation} />

      <NavigationItems show={activeNavigation} />
    </header>
  );
};

export default Navigation;
