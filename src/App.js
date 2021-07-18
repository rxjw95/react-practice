import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  const style = {
    background: "orange",
    margin: "10px",
    padding: "5px",
  };

  return (
    <Wrapper style={style}>
      <Hello name={"react"} color="green" background={"white"} />
      <Hello name={"jangwook"} color="red" background={"blue"} />
      <Hello name={"difficult"} color="blue" background={"yellow"} />
    </Wrapper>
  );
}

export default App;
