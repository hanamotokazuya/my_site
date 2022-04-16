import React from "react";
import styled from "styled-components";

const Base = styled.div`
  background-color: green;
  padding: 15px;
`;
const Name = styled.div`
  font-size: 64px;
`;
const TopMessage = styled.div`
  font-size: 16px;
`;

function Top() {
  return (
    <Base>
      <Name>Kazuya Hanamoto</Name>
      <TopMessage>I am a automotive drive software engineer.</TopMessage>
    </Base>
  );
}

export default Top;
