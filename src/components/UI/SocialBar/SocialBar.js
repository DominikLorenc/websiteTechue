import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from "./SocialBar.module.scss";

const SocialBar = (props) => {
  return (
    <div className={styled.SocialBar}>
      <a className={styled.Link} href={"/"}>
        <FaFacebookF />
      </a>
      <a className={styled.Link} href={"/"}>
        <FaInstagram />
      </a>
      <a className={styled.Link} href={"/"}>
        <FaLinkedinIn />
      </a>
      <a className={styled.Link} href={"/"}>
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialBar;
