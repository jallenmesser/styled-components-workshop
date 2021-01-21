import React from "react";
import DragQueenCard from "../components/DragQueenCard";

export default function DragQueenContainer(props) {
  const renderDragQueenCards = (dragQueens) => {
    console.log(dragQueens);
    return dragQueens.map((queen) => <DragQueenCard queen={queen} />);
  };
  return (
    <div>
      {props.dragQueens ? (
        renderDragQueenCards(props.dragQueens)
      ) : (
        <div>hey</div>
      )}
    </div>
  );
}
