import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Top from "./Top";
import Profile from "./Profile";
import Products from "./Products";
import Contact from "./Contact";

const Base = styled.div`
  transform: translateY(40px);
  padding: 15px;
`;

function Main() {
  const { page } = useContext(AppContext);
  let currentPage = <></>;
  switch (page) {
    case "TOP":
      currentPage = <Top />;
      break;
    case "PROFILE":
      currentPage = <Profile />;
      break;
    case "PRODUCTS":
      currentPage = <Products />;
      break;
    case "CONTACT":
      currentPage = <Contact />;
      break;
    default:
      currentPage = <Top />;
      break;
  }
  return <Base>{currentPage}</Base>;
}

export default Main;
