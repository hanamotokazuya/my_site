import React from "react";
import styled from "styled-components";
import Top from "./Top";
import Profile from "./Profile";
import History from "./History";
import Products from "./Products";
import Contact from "./Contact";

const Base = styled.div`
  background-color: tomato;
`;

function Main() {
  return (
    <Base>
      <Top />
      <Profile />
      <History />
      <Products />
      <Contact />
    </Base>
  );
}

export default Main;
