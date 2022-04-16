import React from "react";
import styled from "styled-components";

const Base = styled.div``;
const Title = styled.h1`
  font-size: 64px;
`;
const TopMessage = styled.p`
  font-size: 16px;
`;

function Top() {
  return (
    <Base>
      <Title>Kazuya Hanamoto</Title>
      <TopMessage>I am a automotive drive software engineer.</TopMessage>
    </Base>
  );
}

export default Top;
