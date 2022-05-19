import React from "react";
import styled, { keyframes } from "styled-components";
const Resultcard = ({ el }) => {
  return (
    <QAWrap>
      <Prompt>
        <span>Prompt</span>: <span>{el.prompt}</span>
      </Prompt>
      <Answer>
        <span>Answer : </span> <span>{el.response}</span>
      </Answer>
    </QAWrap>
  );
};

export default Resultcard;

const fadeIn = keyframes`
  0% {
    
    opacity:.5;
    transform: translateX(-100%);
  }
  100% {opacity:1;
    transform: translateX(0);
  }`;

const QAWrap = styled.div`
  height: fit-content;
  max-width: 80%;

  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  animation: ${fadeIn} linear 0.5s;
  -webkit-animation: ${fadeIn} linear 0.5s;
  -moz-animation: ${fadeIn} linear 0.5s;
  -o-animation: ${fadeIn} linear 0.5s;
  -ms-animation: ${fadeIn} linear 0.5s;
`;
const Prompt = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem;
  background-color: #cee2fd;
  max-width: 90%;
  display: flex;
  position: relative;
  gap: 0.5rem;
  & span:first-child {
    color: #074eab;
    font-weight: 500;
  }
  & span:last-child {
    max-width: 90%;
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    color: #333;

    height: fit-content;
    word-break: break;
  }
`;
const Answer = styled.div`
  margin-top: 0.6rem;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem;
  background-color: #ffe3d6;
  max-width: 100%;
  display: flex;
  position: relative;
  gap: 0.5rem;

  & span:first-child {
    color: #f24900;
    font-weight: 500;
    width: fit-content;
  }
  & span:last-child {
    max-width: 90%;
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    color: #333;

    height: fit-content;
    word-break: break;
  }
`;
