import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  height: 40%;
  min-height: 260px;
  display: flex;
  gap: 50px;
`;
const ContentBand = styled.div`
  height: 100%;
  width: 15px;
  background-color: tomato;
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

function Top() {
  const [isHover, setIsHover] = useState(false);
  // const spring = useSpring({
  //   width: isHover ? "100%" : "15px",
  //   config: { duration: 250 },
  // });
  return (
    <Base>
      <Content>
        <ContentBand className="top-content-band-anime" />
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
