import React from "react";
import PropTypes from "prop-types";
import styled from "./Input.module.scss";

const Input = ({ elementType, name, type, value, placeholder, onChange }) => {
  let inputType = "";

  switch (elementType) {
    case "input":
      inputType = (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={styled.Input}
          onChange={onChange}
        ></input>
      );
      break;
    case "textarea":
      inputType = (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={styled.Textarea}
        ></textarea>
      );
      break;
    default:
      inputType = (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={styled.Input}
          onChange={onChange}
        ></input>
      );
  }

  return <>{inputType}</>;
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
