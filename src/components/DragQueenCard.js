import React, { useState } from "react";
import styled from "styled-components";

export default function DragQueenCard(props) {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  console.log(props.queen);
  return (
    <Card
      color="pink"
      onClick={() => setClicked(!clicked)}
      clicked={clicked}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <DragQueenName>{props.queen.name}</DragQueenName>
      <DragQueenImage src={props.queen.image_url} hover={hover} />
      <DragQueenQuote hover={hover}>{props.queen.quote}</DragQueenQuote>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 150px;
  margin: 10px;
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  background-color: ${(props) => (props.clicked ? props.color : "gray")};
  overflow: scroll;
  transition: all 0.5s ease-in-out 0s;
  :hover {
    transform: scale(1.05);
    box-shadow: 2px 5px black;
  }
`;

const DragQueenName = styled.h4`
  text-align: center;
`;

const DragQueenImage = styled.img`
  height: 150px;
  object-fit: contain;
  display: ${(props) => (props.hover ? "none" : "block")};
`;
const DragQueenQuote = styled.p`
  display: ${(props) => (props.hover ? "block" : "none")};
`;
