import React from "react";
import Gallery from "./Carousel/Carousel";
import styled from "./Partners.module.scss";
import TitleSection from "../UI/TitleSection/TitleSection";

const Partners = (props) => {
  return (
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
  );
};

export default Partners;
