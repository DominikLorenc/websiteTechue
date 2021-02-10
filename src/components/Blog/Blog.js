/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";

import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import TitleSection from "../UI/TitleSection/TitleSection";
import styled from "./Blog.module.scss";
import Card from "../UI/Card/Card";
import blog1Img from "../../assets/blog1.png";
import blog2Img from "../../assets/blog2.png";
import blog3Img from "../../assets/blog3.png";

const navItemsContents = ["all", "creative", "fintech", "modern", "marketing"];

const Blog = (props) => {
  const [cardsContent, setCardsContent] = useState([
    {
      id: 0,
      image: blog1Img,
      name: "creative, fintech",
      description:
        "Showcase some of your recent news stories and link to your medium.com or external blog.",
      views: 1750,
      like: 520,
      visible: true,
    },
    {
      id: 1,
      image: blog2Img,
      name: "modern, fintech",
      description:
        "This is also a great place to feature some of your company's recent news in the press and online.",
      views: 1950,
      like: 540,
      visible: true,
    },
    {
      id: 2,
      image: blog3Img,
      name: "creative, marketing",
      description:
        "Click on the category links above and you'll see your blog posts get filtered right before your eyes.",
      views: 1820,
      like: 580,
      visible: true,
    },
  ]);
  const [idCard, setIdCard] = useState(0);
  const [sortCard, setSortCard] = useState([]);

  useEffect(() => {
    setSortCard(cardsContent);
  }, [cardsContent]);

  const sortCards = (item, id) => {
    setIdCard(id);

    let card = [];

    cardsContent.map(({ name }, index) => {
      if (item === "all") {
        setSortCard(cardsContent);
      } else {
        const isVisible = name.includes(item);

        if (isVisible) {
          card.push({ ...cardsContent[index], visible: true });
        } else {
          card.push({ ...cardsContent[index], visible: false });
        }

        setSortCard(card);
      }
    });
  };

  const navItems = navItemsContents.map((item, i) => (
    <NavigationItem
      id={i}
      key={item}
      selectedID={idCard}
      btn
      click={() => sortCards(item, i)}
    >
      {item}
    </NavigationItem>
  ));

  const cards = sortCard.map(
    ({ image, name, description, views, like, visible }, i) => {
      return (
        <Card
          id={i}
          isVisible={visible}
          key={name}
          image={image}
          title={name}
          description={description}
          blogCard
          views={views}
          like={like}
        />
      );
    }
  );

  return (
    <section className={styled.Blog}>
      <TitleSection subtitle={"Featured stories"} title={"Our blog"} />
      <ul className={styled.BlogNavigation}>{navItems}</ul>
      <div className={styled.BlogCardsContainer}>{cards}</div>
    </section>
  );
};

export default Blog;
