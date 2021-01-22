import React, { useState } from "react";
import styled from "styled-components";

export default function DragQueenCard(props) {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  console.log(clicked);

  const changeClick = () => {
    setClicked(!clicked);
  };
  return (
    <Card
      color="pink"
      onClick={changeClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <DragQueenName clicked={clicked}>{props.queen.name}</DragQueenName>
      <DragQueenImage src={props.queen.image_url} hover={hover} />
      <DragQueenQuote hover={hover}>{props.queen.quote}</DragQueenQuote>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 250px;
  overflow: hidden;
  margin: 10px;
  :hover {
    background-color: ${(props) => props.color};
    color: black;
  }
`;

const DragQueenImage = styled.img`
  height: 100px;
  display: ${(props) => (props.hover ? "none" : "block")};
  object-fit: contain;
`;

const DragQueenName = styled.h4`
  text-align: center;
  color: ${(props) => (props.clicked ? "purple" : "black")};
`;

const DragQueenQuote = styled.p`
  display: ${(props) => (props.hover ? "block" : "none")};
  font-style: italic;
  :hover {
    display: initial;
  }
`;
