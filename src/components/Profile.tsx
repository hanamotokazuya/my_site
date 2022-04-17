import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import TimeSeries from "./TimeSeries";
import data from "../json/profile.json";

function Profile() {
  const [isOpenText, setIsOpenText] = useState(false);
  const [contentNum, setContentNum] = useState(0);
  const contents: Profile[] = data["data"];
  return (
    <>
      <PageTitle>About me</PageTitle>
      <TransitionStyle>
        <CSSTransition in={isOpenText} timeout={600} classNames="content" unmountOnExit>
          <Content>
            <h3 className="title">{contents[contentNum].title}</h3>
            <p className="text">{contents[contentNum].text}</p>
            <div className="close" onClick={() => setIsOpenText(!isOpenText)}>
              CLOSE
            </div>
          </Content>
        </CSSTransition>
        <CSSTransition in={isOpenText} timeout={600} classNames="shadow" unmountOnExit>
          <Shadow onClick={() => setIsOpenText(!isOpenText)} />
        </CSSTransition>
      </TransitionStyle>
      <TimeSeries
        contents={contents}
        isOpenText={isOpenText}
        setIsOpenText={setIsOpenText}
        setContentNum={setContentNum}
      />
    </>
  );
}

export default Profile;

const PageTitle = styled.h2`
  font-size: 32px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 50px;
`;
const Content = styled.div`
  position: fixed;
  padding: 20px;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  z-index: 2;
  .title {
    font-size: 26px;
    color: black;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .text {
    font-size: 16px;
    line-height: 1.5;
    color: #444444;
    margin-bottom: 20px;
  }
  .close {
    display: inline-block;
    font-size: 16px;
    color: tomato;
  }
`;
const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  opacity: 0.2;
  z-index: 1;
`;
const TransitionStyle = styled.div`
  .content-enter {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  .content-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.3s, transform 0.3s;
  }
  .content-exit {
    opacity: 1;
  }
  .content-exit-active {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
    transition: opacity 0.3s, transform 0.3s;
  }
  .shadow-enter {
    opacity: 0;
  }
  .shadow-enter-active {
    opacity: 0.2;
    transition: opacity 0.3s;
  }
  .shadow-exit {
    opacity: 0.2;
  }
  .shadow-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
