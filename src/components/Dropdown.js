import React from "react";
import styled from "styled-components";

const Dropdown = ({ options, func }) => {
  const [value, setValue] = React.useState("comedy");
  return (
    <Select
      onChange={(e) => {
        func(e.target.value);
        setValue(e.target.value);
      }}
      value={value}
    >
      {options.map((option, i) => {
        return (
          <option
            key={option}
            value={i === 0 ? "default" : option}
            onClick={() => {
              setValue(option);
              func(i === 0 ? "default" : option);
            }}
          >
            {option}
          </option>
        );
      })}
    </Select>
  );
};

export default Dropdown;

const Select = styled.select`
  height: 3.4rem;
  width: 200px;
  padding: 0 0.5rem;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  outline: 0;
  & option {
    color: #fff;
    background-color: #010a88;
    border-radius: 10px;
    border: 0;
    outline: 0;
  }

  @media (max-width: 510px) {
    width: calc(90% + 15px);
  }
`;
