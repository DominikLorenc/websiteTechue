import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Highlights from "../../components/Highlights/Highlights";
import ImageAnimation from "../../components/UI/ImageAnimation/ImageAniamtion";
import styled from "./HomePage.module.scss";
import headerImg from "../../assets/header-img.svg";
import Title from "../../components/UI/Title/Title";
import StoreBar from "../../components/UI/StoreBar/StoreBar";
import SocialBar from "../../components/UI/SocialBar/SocialBar";
import Features from "../../components/Features/Features";
import Partners from "../../components/Partners/Partners";
import Blog from "../../components/Blog/Blog";
import PerfectionSection from "../../components/PerfectionSection/PerfectionSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import bgImg from "../../assets/header-bg.svg";
import { Element } from "react-scroll";

const HomePage = (props) => {
  return (
    <div>
      <div className={styled.BgHeaderContainer}>
        <img className={styled.BgHeaderImg} src={bgImg} alt={"bg"}></img>
      </div>
      <Navigation />
     <Element name='home'>
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
     </Element>
      <Highlights />
      <Features />
      <Partners />
      <Blog />
      <PerfectionSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
