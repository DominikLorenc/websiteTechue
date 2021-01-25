import React from "react";
import Gallery from "./Carousel/Carousel";
import styled from "./Partners.module.scss";

const Partners = (props) => {
  return (
    <section className={styled.Partners}>
      <div>
        <p>We work with the best</p>
        <h2>Our Partners</h2>
        <p>
          We work with some of the greatest companies in the industry to help
          deliver our services around the world
        </p>
      </div>
      <div className={styled.Carousel}>
        <Gallery />
      </div>
    </section>
  );
};

export default Partners;
