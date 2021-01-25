import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Highlights from "../../components/Highlights/Highlights";
import ImageAnimation from "../../components/UI/ImageAnimation/ImageAniamtion";
import styled from "./HomePage.module.scss";
import headerImg from "../../assets/header-img.svg";
import Title from "../../components/UI/Title/Title";
import StoreBar from "../../components/UI/StoreBar/StoreBar";
import SocialBar from "../../components/UI/SocialBar/SocialBar";
import Partners from "../../components/Partners/Partners";

const HomePage = (props) => {
  return (
    <div>
      <Navigation />
      <header className={styled.HeaderSection}>
        <ImageAnimation source={headerImg} />
        <div className={styled.HeaderSocialSection}>
          <Title
            title={"Get the ball rolling with techue."}
            description={
              "Techue is a vibrant, lightweight landing page template for all businesses."
            }
          />
          <p>
            <strong>Start your 90-day free trial now.</strong>
          </p>
          <StoreBar />
          <SocialBar />
        </div>
      </header>
      <Highlights />
      <Partners />
    </div>
  );
};

export default HomePage;
