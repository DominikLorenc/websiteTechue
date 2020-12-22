import React from "react";
import styled from "./Highlights.module.scss";
import Card from "../UI/Card/Card";

import img1 from "../../assets/mobile-app-img.svg";
import img2 from "../../assets/social-integration-img.svg";
import img3 from "../../assets/ecommerce-addons-img.svg";



const contentCards = [
  {
    image: img1,
    title: "Mobile application",
    description:
      "This is a great section to introduce some of your companies highlighted services.",
    highlighted: false,
  },
  {
    image: img2,
    title: "Social integration",
    description:
      "Why not highlight the most popular of your top services with a much more vibrant gradient colour like this to help grap visitors' attention.",
    highlighted: true,
  },
  {
    image: img3,
    title: "Ecommerce addons",
    description:
      "This is a great section to introduce some of your companies highlighted services.",
    highlighted: false,
  },
];

const Highlight = (props) => {
  const cards = contentCards.map((card) => (
    <Card
      highlighted={card.highlighted}
      image={card.image}
      title={card.title}
      description={card.description}
    />
  ));

  return <section className={styled.Highlights}>{cards}</section>;
};

export default Highlight;
