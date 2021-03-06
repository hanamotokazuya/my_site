import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import styled from "styled-components";
import Top from "./Top";
import Profile from "./Profile";
import Products from "./Products";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { tab, sp } from "../utils/media";

function Main() {
  const { page } = useContext(AppContext);
  let currentPage: JSX.Element = <></>;
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
    default:
      currentPage = <Top />;
      break;
  }
  return (
    <SwitchTransition>
      <CSSTransition key={page} timeout={1000} classNames="fade">
        <Base>{currentPage}</Base>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Main;

const Base = styled.div`
  padding-top: 100px;
  height: calc(100vh - 100px);
  ${tab`
    padding-top: 50px;
    height: calc(100vh - 50px);
  `}
  ${sp`
    padding-top: 40px;
    height: calc(100vh - 40px);
  `}
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 1s;
  }
  &.fade-enter-done {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 1s;
  }
  &.fade-exti-done {
    opacity: 0;
  }
`;
