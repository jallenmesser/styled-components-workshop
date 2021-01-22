import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <Wrapper>
      <Name>Jallen</Name>
      <Bio>Drag Queen Aficionado</Bio>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 20%;
`;

const Name = styled.h1`
  color: pink;
`;

const Bio = styled.p`
  color: gray;
`;
