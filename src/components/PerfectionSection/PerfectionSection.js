import React from "react";
import ImageAnimation from "../UI/ImageAnimation/ImageAniamtion";
import TitleSection from "../UI/TitleSection/TitleSection";
import styled from "./PerfectionSection.module.scss";
import perfectImg from "../../assets/perfection-header-img.png";

const PerfectionSection = (props) => {
  return (
    <section className={styled.PerfectionSection}>
      <div className={styled.PerfectionContent}>
        <TitleSection
          title={"Made to pixel perfection"}
          description={
            "Show your clients something eye catching here to grab their attention and make them want to signup to your great service today"
          }
        />
        <div className={styled.ImgContainer}>
          <ImageAnimation source={perfectImg} />
        </div>
      </div>
    </section>
  );
};

export default PerfectionSection;
