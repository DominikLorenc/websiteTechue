import React from "react";
import styled from "./Card.module.scss";
import PropTypes from 'prop-types';


const Card = (props) => {
  let style = [styled.Card];
  if (props.highlighted) {
    style = [styled.Card, styled.Highlighted_card];
  }
  return (
    <div className={style.join(" ")}>
      <div className={styled.Container_img}>
        <img className={styled.Img} src={props.image} alt={"people"} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p className={styled.Description}>{props.description}</p>
        <a className={styled.Link} href={"/"}>
          View more
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  highlighted: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
