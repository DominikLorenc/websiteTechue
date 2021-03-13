import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from "./SocialBar.module.scss";

const SocialBar = ({ isGray }) => {
  let style = [styled.Link];

  if (isGray) {
    style = [styled.Link, styled.FooterColor].join(" ");
  }

  return (
    <div className={styled.SocialBar}>
      <a className={style} href={"/"}>
        <FaFacebookF />
      </a>
      <a className={style} href={"/"}>
        <FaInstagram />
      </a>
      <a className={style} href={"/"}>
        <FaLinkedinIn />
      </a>
      <a className={style} href={"/"}>
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialBar;
