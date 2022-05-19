import "./App.css";

import styled from "styled-components";
import { logo, mainBg, navBanner } from "./assets";
import Form from "./components/Form";
import Resultcard from "./components/Resultcard";
import Dropdown from "./components/Dropdown";
import { useEffect, useState } from "react";

function App() {
  const localData = localStorage.getItem("smartiData")
    ? JSON.parse(localStorage.getItem("smartiData"))
    : null;
  const [userData, setUserData] = useState([]);
  const [engine, setEngine] = useState("text-curie-001");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!localData) {
        setUserData([]);
      } else {
        setUserData(localData);
      }
    } else {
      return;
    }
    return () => (mounted = false);
  }, []);

  return (
    <AppWrap>
      <Header>
        <Nav>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Dropdown
            options={[
              "-- select engine",
              "text-davinci-002",
              "text-curie-001",
              "text-babbage-001",
              "text-ada-001",
            ]}
            func={setEngine}
          />
        </Nav>
        <Form engine={engine} userData={userData} setUserData={setUserData} />
      </Header>
      <Main>
        <h3>My Response</h3>
        <Result>
          {userData?.map((el, i) => {
            return <Resultcard el={el} key={i} />;
          })}
        </Result>
        <p>Powered by OpenAi GPT-3</p>
      </Main>
    </AppWrap>
  );
}

export default App;
const AppWrap = styled.div`
  height: fit-content;
  width: 100%;
`;
const Header = styled.header`
  height: 14.81rem;
  width: 100%;
  background-color: #fafafa;
  background-image: url(${navBanner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: calc(100% - 60px);
    padding: 0 30px;
    height: fit-content;
    padding-bottom: 1rem;
  }
  @media (max-width: 400px) {
    width: calc(100% - 30px);
    padding: 0 15px;
    padding-bottom: 1rem;
  }
`;
const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 250px;
  height: 60px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 500px) {
    width: 150px;
  }
  @media (max-width: 381px) {
    width: 120px;
  }
`;
const Wrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
`;
const Wrapabtn = styled.button`
  padding: 16px 30px;
  border-radius: inherit;
  outline: 0;
  border: 2px solid #f0f0f0;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: #f0f0f0;
    color: grey;
    box-shadow: 0 0 7px aliceblue;
  }
`;
const Main = styled.main`
  height: fit-content;
  width: 100%;
  background-image: url(${mainBg});
  display: flex;
  background-size: contain;
  flex-direction: column;
  align-items: center;
  & > h3 {
    font-size: 1.5rem;
    font-weight: semi-bold;
    color: #464646;
  }
`;
const Result = styled.section`
  height: 23rem;
  max-width: 60%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 87px 0px rgba(63, 142, 247, 0.1);
  background: rgba(231, 241, 254, 1);
  border: 2px solid rgba(63, 142, 247, 1);
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  gap: 1rem;

  &::-webkit-scrollbar {
    background-color: rgba(63, 142, 247, 1);
    width: 0.5rem;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 15px;
    box-shadow: 0 15px 6px #333;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  @media (max-width: 900px) {
    max-width: 90%;
  }
`;
