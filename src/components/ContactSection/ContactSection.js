import React, { useState } from "react";
import TitleSection from "../UI/TitleSection/TitleSection";
import ImageAnimation from "../UI/ImageAnimation/ImageAniamtion";
import styled from "./ContactSection.module.scss";
import contactImg from "../../assets/contact.png";
import Input from "../UI/Input/Input";
import { Element } from "react-scroll";

const ContactSection = (props) => {
  const [formState, setFormState] = useState([
    {
      id: 0,
      elementType: "input",
      name: "name",
      type: "input",
      value: "",
      placeholder: "Name",
    },
    {
      id: 1,
      elementType: "input",
      name: "email",
      type: "email",
      value: "",
      placeholder: "Email",
    },
    {
      id: 2,
      elementType: "textarea",
      name: "message",
      value: "",
      placeholder: "Message",
    },
  ]);

  const handlerOnChange = (e, id) => {
    const updateState = [...formState];
    updateState[id].value = e.target.value;
    setFormState(updateState);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
  };

  const form = formState.map(
    ({ id, elementType, name, type, value, placeholder }) => {
      return (
        <Input
          key={name}
          elementType={elementType}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handlerOnChange(e, id)}
        />
      );
    }
  );

  return (
  <Element name='contact'>
      <section className={styled.ContactSection}>
      <div className={styled.FormSection}>
        <div className={styled.TitleContainer}>
          <TitleSection
            subtitle={"Contact the team"}
            title={"Start a conversation"}
            description={`We're alwaysav ailable for a chat so do feel free to get in touch below and a member of the team will get right back to you.`}
          />
        </div>
        <form onSubmit={handlerOnSubmit} className={styled.Form}>
          {form}
          <button className={styled.SubmitBtn}>Submit message</button>
        </form>
      </div>
      <div className={styled.ImgContainer}>
        <ImageAnimation source={contactImg} />
      </div>
    </section>
  </Element>
  );
};

export default ContactSection;
