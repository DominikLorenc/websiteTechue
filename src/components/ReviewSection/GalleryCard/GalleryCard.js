import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./GalleryCard.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

const GalleryCard = ({ clients }) => {
  const item = clients.map(({ id, src, name, proffesion, description }) => (
    <ReviewCard
      key={id}
      src={src}
      name={name}
      proffesion={proffesion}
      description={description}
    />
  ));

  return (
    <AliceCarousel disableButtonsControls={true} mouseTracking={true}>
      {item}
    </AliceCarousel>
  );
};

export default GalleryCard;
