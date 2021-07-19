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
      <Hello
        name={"react"}
        color="green"
        background={"white"}
        isSpecial={false}
      />

      {/* isSpecial에 값을 넘기지 않으면 true 넘어가게 된다. */}
      <Hello name={"jangwook"} color="red" background={"blue"} isSpecial />
      <Hello name={"difficult"} color="blue" background={"yellow"} />
    </Wrapper>
  );
}

export default App;
