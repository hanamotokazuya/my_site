import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { tab, sp } from "../utils/media";

function Top() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Base>
      <Content onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        <CSSTransition in={isHover} timeout={1000} classNames="band">
          <ContentBand className="top-content-band-anime" />
        </CSSTransition>
        <ContentWrapper>
          <TopMessage>
            <div className="top-message-block">
              <span className="top-content-message-anime">生涯続けたいこと、</span>
            </div>
            <br />
            <div className="top-message-block">
              <span className="top-content-message-anime">それは学び続けること。</span>
            </div>
          </TopMessage>
          <Auther>
            <p className="top-content-message-anime auther">Kazuya Hanamoto</p>
          </Auther>
        </ContentWrapper>
      </Content>
    </Base>
  );
}

export default Top;

const Base = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 750px;
  height: 40%;
  min-height: 260px;
  position: relative;
`;
const ContentBand = styled.div`
  position: absolute;
  height: 100%;
  background-color: tomato;
  width: 15px;
  &.band-enter {
    width: 15px;
  }
  &.band-enter-active {
    width: 100%;
    transition: width 0.2s;
  }
  &.band-enter-done {
    width: 100%;
  }
  &.band-exit {
    width: 100%;
  }
  &.band-exit-active {
    width: 15px;
    transition: width 0.2s;
  }
  &.band-exit-done {
    width: 15px;
  }
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;
const TopMessage = styled.h1`
  font-size: 64px;
  line-height: 1.8;
  ${tab`
      font-size: 32px;
      line-height: 1.4;
    `}
  ${sp`
      font-size: 24px;
      line-height: 1.2;
    `}
  .top-message-block {
    display: inline-block;
    overflow: hidden;
    height: 80px;
    ${tab`
      height: 40px;
    `}
    ${sp`
      height: 30px;
    `}
  }
`;
const Auther = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 50px;
  ${tab`
      height: 20px;
    `}
  ${sp`
      height: 20px;
    `}
  .auther {
    font-size: 20px;
    ${tab`
      font-size: 16px;
    `}
    ${sp`
      font-size: 12px;
    `}
  }
`;
