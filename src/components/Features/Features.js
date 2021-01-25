import React from "react";
import ImageAnimation from "../UI/ImageAnimation/ImageAniamtion";
import styled from "./Features.module.scss";
import Feature from "./Feature/Feature";
import features from "../../assets/features.png";
import financeGuard from "../../assets/financial-guard-img.svg";
import fulfillment from "../../assets/fulfillment-service-img.svg";
import launchPad from "../../assets/launch-pad-img.svg";
import support from "../../assets/support-247-img.svg";
import happyCustomers from "../../assets/happy-customers-img.svg";
import social from "../../assets/social-compatibility-img.svg";
import TitleSection from "../UI/TitleSection/TitleSection";

const featureContent = [
  {
    img: financeGuard,
    title: "Finance Assist",
    description: "Helping project your account details safely and securely. ",
  },
  {
    img: fulfillment,
    title: "Fulfilment Service",
    description: "We sort out the business logistics so you don't have to.",
  },
  {
    img: launchPad,
    title: "Launch Pad",
    description: "Get ready for take off in a short matter of seconds.",
  },
  {
    img: support,
    title: "Support 24/7",
    description: "Your business never stops working so neither do we.",
  },
  {
    img: happyCustomers,
    title: "Happy Customers",
    description: "We pride ourselves in excellent client service.",
  },
  {
    img: social,
    title: "Social Integration",
    description: "Connect with a whole host of social media platforms.",
  },
];

const Features = (props) => {
  const feature = featureContent.map((el) => {
    return (
      <Feature
        key={el.title}
        img={el.img}
        title={el.title}
        description={el.description}
        alt={el.title}
      />
    );
  });

  return (
    <section className={styled.Features}>
      <div className={styled.ImgContainer}>
        <ImageAnimation source={features} />
      </div>
      <div className={styled.Content}>
        {/* <div className={styled.TitleSection}>
          <p>About our application</p>
          <h2>Some of our features</h2>
          <p>
            Don't be afraid to brag about some of your unique selling points
            here. Your visitors would love to find out more about your service
            features.
          </p>
        </div> */}
        <TitleSection
          subtitle={"About our application"}
          title={"Some of our features"}
          description={`Don't be afraid to brag about some of your unique selling points
            here. Your visitors would love to find out more about your service
            features.`}
        />
        <div className={styled.FeaturesContainer}>{feature}</div>
      </div>
    </section>
  );
};

export default Features;
