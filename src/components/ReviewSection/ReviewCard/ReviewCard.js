import React from "react";
import styled from "./ReviewCard.module.scss";

const ReviewCard = ({src,name,proffesion,description}) => {
  return (
    <div className={styled.ReviewCard}>
      <div className={styled.ImgContainer}>
        <img className={styled.Img} src={src} alt={"clinet"} />
      </div>
        <h1 className={styled.Name}>{name}</h1>
        <p className={styled.Profession}>{proffesion}</p>
      <div className={styled.Description}>
        <p>
         {description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
