import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from "./SocialBar.module.scss";

const SocialBar = (props) => {
  return (
    <div className={styled.SocialBar}>
      <a href={"/"}>
        <FaFacebookF />
      </a>
      <a href={"/"}>
        <FaInstagram />
      </a>
      <a href={"/"}>
        <FaLinkedinIn />
      </a>
      <a href={"/"}>
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialBar;
