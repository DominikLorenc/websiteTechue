import React from "react";
import styled from "./Card.module.scss";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FaLongArrowAltRight, FaHeart } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

const Card = ({
  blogCard,
  isVisible,
  views,
  like,
  highlighted,
  image,
  title,
  description,
}) => {
  let style = [styled.Card];

  let cardFooter = (
    <a className={styled.Link} href={"/"}>
      View more
    </a>
  );

  if (highlighted) {
    style = [styled.Card, styled.Highlighted_card];
  }

  if (blogCard) {
    style = [styled.BlogCard];

    if (!isVisible) {
      style = [styled.BlogCard, styled.IsVisible];
    }

    cardFooter = (
      <div className={styled.CardFooter}>
        <IconContext.Provider
          value={{ className: styled.ViewArrow, size: "2.5rem" }}
        >
          <div className={styled.ViewMore}>
            <a href={"/"} className={styled.ViewLink}>
              View More <FaLongArrowAltRight />
            </a>
          </div>
        </IconContext.Provider>
        <div>
          <div className={styled.Likes}>
            <p>
              <MdVisibility /> {views}
            </p>
            <p>
              <FaHeart /> {like}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.join(" ")}>
      <div className={styled.Container_img}>
        <img className={styled.Img} src={image} alt={"people"} />
      </div>
      <div>
        <h1 className={styled.Title}>{title}</h1>
        <p className={styled.Description}>{description}</p>
        {cardFooter}
      </div>
    </div>
  );
};

Card.propTypes = {
  blogCard: PropTypes.bool, 
  isVisible: PropTypes.bool,
  views: PropTypes.number,
  like: PropTypes.number,
  highlighted: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
