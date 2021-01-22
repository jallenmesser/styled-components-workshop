import React from "react";
import DragQueenCard from "../components/DragQueenCard";
import styled from "styled-components";

export default function DragQueenContainer(props) {
  const renderDragQueenCards = (dragQueens) => {
    console.log(dragQueens);
    return dragQueens.map((queen) => <DragQueenCard queen={queen} />);
  };
  return (
    <Wrapper>
      {props.dragQueens ? (
        renderDragQueenCards(props.dragQueens)
      ) : (
        <div>hey</div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;
