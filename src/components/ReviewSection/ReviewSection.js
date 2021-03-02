import React from "react";
import TitleSection from "../UI/TitleSection/TitleSection";
import GalleryCard from "./GalleryCard/GalleryCard";
import styled from "./ReviewSection.module.scss";
import user1 from "../../assets/user.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";

const clients = [
  {
    id: 0,
    src: user1,
    name: "John McDonaldson",
    proffesion: "Software Engineer",
    description: `Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!`,
  },
  {
    id: 1,
    src: user2,
    name: "Margaret Fletcher",
    proffesion: "Sales Executive",
    description: `Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!`,
  },
  {
    id: 2,
    src: user3,
    name: "Frederick Knighthood",
    proffesion: "Public Speaker",
    description: `Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!`,
  },
];

const ReviewSection = (props) => {
  return (
    <section className={styled.ReviewSection}>
      <TitleSection
        subtitle={"What they say about us"}
        title={"Client reviews"}
      />
      <GalleryCard clients={clients} />
    </section>
  );
};

export default ReviewSection;
