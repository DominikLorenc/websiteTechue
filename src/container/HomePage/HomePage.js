import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Highlights from "../../components/Highlights/Highlights";
import styled from "./HomePage.module.scss";

const HomePage = (props) => {
  return (
    <div>
      <Navigation />
      <Highlights />
    </div>
  );
};

export default HomePage;
