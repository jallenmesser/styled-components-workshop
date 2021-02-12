import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavWrapper>
      <Title>This is the nav</Title>
      <ButtonWrapper>
        <NavButton>Click me</NavButton>
        <NavButton>Click me</NavButton>
      </ButtonWrapper>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: purple;
  width: 300px;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

const NavButton = styled.button`
  border: none;
  color: white;
  background-color: pink;
  border-radius: 5px;
`;
