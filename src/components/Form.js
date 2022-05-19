import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import InputField from "./Input";
import axios from "axios";
const Form = ({ engine, userData, setUserData }) => {
  const [prompt, setPrompt] = useState("");
  const [preset, setPreset] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    setLoading(true);

    try {
      const response = await axios.post(
        `https://api.openai.com/v1/engines/${
          engine === "default" ? "text-curie-001" : engine
        }/completions`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      setUserData([
        {
          id: userData.length + 1,
          prompt,
          response: response.data.choices[0].text,
        },
        ...userData,
      ]);
      //push data to local storage
      localStorage.setItem(
        "smartiData",
        JSON.stringify(
          (userData = [
            {
              id: userData.length + 1,
              prompt,
              response: response.data.choices[0].text,
            },
            ...userData,
          ])
        )
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>I am Smarti, ask me anything!</h1>
      <InputsWrap>
        <InputField setPrompt={setPrompt} />
        <Dropdown
          options={[
            "-- Load a preset",
            "Grammatical Standard English",
            "Text to command",
            "English to other languages",
          ]}
          func={setPreset}
        />
        <Button
          type="submit"
          disabled={prompt === "" || loading === true ? true : false}
          value={loading ? "Loading..." : "Search now"}
          style={{ cursor: loading ? "not-allowed" : "pointer" }}
        ></Button>
      </InputsWrap>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 0rem auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & h1 {
    color: white;
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
`;
const InputsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 851px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  /* @media (max-width: 510px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  } */
`;
const Button = styled.input`
  color: #010a88;
  padding: 18px 30px;
  border-radius: 10px;
  font-weight: 500;

  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    padding: 16px 30px;
  }
`;
