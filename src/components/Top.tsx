import React, { useState } from "react";
import styled from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";

function Top() {
  const [isHover, setIsHover] = useState(false);
  const transitionStyle = {
    entering: {
      transition: "all 1s ease",
      width: "500px",
    },
    entered: {},
    exiting: {
      transition: "all 1s ease",
      width: "15px",
    },
    exited: {},
  };
  return (
    <Base>
      <Content onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        <Transition in={isHover} timeout={1000}>
          {(state) => <ContentBand state={state} className="top-content-band-anime" />}
        </Transition>
        <ContentWrapper>
          <TopMessage>
            <TopMessageBlock>
              <span className="top-content-message-anime">生涯続けたいこと、</span>
            </TopMessageBlock>
            <br />
            <TopMessageBlock>
              <span className="top-content-message-anime">それは学び続けること。</span>
            </TopMessageBlock>
          </TopMessage>
          <AutherBlock>
            <Auther className="top-content-message-anime">Kazuya Hanamoto</Auther>
          </AutherBlock>
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
const ContentBand = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  height: 100%;
  background-color: tomato;
  transition: 0.2s;
  width: ${({ state }) => (state === "entering" || state === "entered" ? "100%" : "15px")};
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
`;
const TopMessageBlock = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 80px;
`;
const AutherBlock = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 50px;
`;
const Auther = styled.p`
  font-size: 20px;
`;
