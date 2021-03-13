import React from "react";
import styled from "./FooterAddressCard.module.scss";
import PropTypes from "prop-types";
import SocialBar from "../../UI/SocialBar/SocialBar";

const FooterAddressCard = ({
  title,
  address,
  phoneNumber,
  email,
  logo,
  description,
}) => {
  
  const listItemWithoutLogo = (
    <ul className={styled.ListItems}>
      <li className={styled.ListItem}>{address}</li>
      <li className={styled.ListItem}>
        <strong>Tel:</strong>
        {phoneNumber}
      </li>
      <li className={styled.ListItem}>
        <strong>Email:</strong>
        {email}
      </li>
    </ul>
  );

  const listItemWithLogo = (
    <>
      <p>{description}</p>
      <SocialBar isGray />
    </>
  );

  return (
    <div className={styled.FooterCard}>
      <h3 className={styled.Title}>{title}</h3>
      {logo ? listItemWithLogo : listItemWithoutLogo}
    </div>
  );
};

FooterAddressCard.propsTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default FooterAddressCard;
