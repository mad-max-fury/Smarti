import React, { useState } from "react";
import styled from "styled-components";
const InputField = ({ setPrompt }) => {
  const [value, setValue] = useState("");
  const HandleChange = (e) => {
    setValue(e.target.value);
    setPrompt(e.target.value);
  };
  return (
    <>
      <InputWrap
        placeholder="Type your questions here"
        value={value}
        onChange={HandleChange}
      />
    </>
  );
};

export default InputField;

const InputWrap = styled.input`
  width: 45%;
  height: 3rem;
  border-radius: 10px;
  border: 2px solid #e6e6e6;
  background-color: unset;
  color: #ffffff;
  padding-left: 10px;
  outline: 0;
  &::placeholder {
    color: #f5f5f5;
  }
  @media (max-width: 851px) and (min-width: 510px) {
    grid-column: span 2;
    width: calc(100% - 15px);
    margin: 0 auto;
  }
  @media (max-width: 510px) {
    width: 90%;
  }
`;
