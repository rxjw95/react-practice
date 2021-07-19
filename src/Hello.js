import React from "react";

const Hello = ({ name, color, background, margin, isSpecial }) => {
  return (
    <div style={{ color, background, margin }}>
      {/* {isSpecial ? <b>*</b>} : null */}
      {isSpecial && <b>*</b>}
      hello, {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "jangwook",
  color: "red",
  margin: "10px",
  background: "white",
};

export default Hello;
