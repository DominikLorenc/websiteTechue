import React from "react";
import Gallery from "./Carousel/Gallery";
import styled from "./Partners.module.scss";
import TitleSection from "../UI/TitleSection/TitleSection";
import { Element } from "react-scroll";

const Partners = (props) => {
  return (
    
 <Element name='partners'>
      <section className={styled.Partners}>
      <TitleSection
        subtitle={"We work with the best"}
        title={"Our Partners"}
        description={
          "We work with some of the greatest companies in the industry to help deliver our services around the world"
        }
      />
      <div className={styled.Carousel}>
        <Gallery />
      </div>
    </section>
 </Element>
  );
};

export default Partners;
