import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import logo1 from "../../../assets/dummy_logo1.png";
import logo2 from "../../../assets/dummy_logo2.png";
import logo3 from "../../../assets/dummy_logo3.png";
import styled from "./Gallery.module.scss";

const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    760: { items: 3 },
    1024: { items: 4 },
  };

  

  return (
    <AliceCarousel
      disableButtonsControls={true}
      mouseTracking={true}
      responsive={responsive}
      infinite
    >
      <img
        src={logo1}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo2}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo3}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo3}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo1}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo2}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo3}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo1}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
      <img
        src={logo2}
        onDragStart={handleOnDragStart}
        className={styled.Image}
        alt={"logo"}
      />
    </AliceCarousel>
  );
};

export default Gallery;
