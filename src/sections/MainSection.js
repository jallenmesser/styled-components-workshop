import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import DragQueenContainer from "../containers/DragQueenContainer";
import styled from "styled-components";

export default function MainSection() {
  const [dragQueens, setDragQueens] = useState("");

  useEffect(() => {
    fetch("http://www.nokeynoshade.party/api/queens/all")
      .then((resp) => resp.json())
      .then((dragQueensAPI) => setDragQueens(dragQueensAPI));
  }, []);
  return (
    <Wrapper>
      <SideBar />
      {dragQueens === "" ? (
        <div> nada </div>
      ) : (
        <DragQueenContainer dragQueens={dragQueens} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 95vh;
  width: 100vw;
`;
