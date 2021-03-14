import React from "react";
import styled from "./Footer.module.scss";
import FooterAddressCard from "./FooterAddressCard/FooterAddressCard";

const Footer = (props) => {
  return (
    <footer className={styled.Footer}>
      <div className={styled.FooterContainer}>
        <FooterAddressCard
          logo={true}
          title={"techue."}
          description={`Techue is a vibrant and lightweight landing page template by Codefest. We like to do business at Techue HQ to client satisfaction.`}
        />
        <FooterAddressCard
          title={" London Office"}
          address={`150B Technologie Avenue
        London, SE1 2NY`}
          phoneNumber={" +44 (800) 123 4567"}
          email={" london@domain.com"}
        />
        <FooterAddressCard
          title={" London Office"}
          address={`150B Technologie Avenue
        London, SE1 2NY`}
          phoneNumber={" +44 (800) 123 4567"}
          email={" london@domain.com"}
        />
      </div>
    </footer>
  );
};

export default Footer;
