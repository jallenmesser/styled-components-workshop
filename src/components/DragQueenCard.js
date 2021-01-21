import React from "react";

export default function DragQueenCard(props) {
  console.log(props.queen);
  return (
    <div>
      <h4>{props.queen.name}</h4>
      <img src={props.queen.image_url} style={{ height: 100 }} />
      <p>{props.queen.quote}</p>
    </div>
  );
}
