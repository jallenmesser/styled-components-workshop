import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <Wrapper>
      <Title>Jallen</Title>
      <Bio>Drag Queen Aficionado</Bio>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 20%;
`;

const Title = styled.h1`
  color: pink;
`;

const Bio = styled.p`
  color: gray;
`;
