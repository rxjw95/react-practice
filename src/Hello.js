import React from "react";

const Hello = ({ name, color, background, margin }) => {
  return <div style={{ color, background, margin }}>hello, {name}</div>;
};

Hello.defaultProps = {
  name: "jangwook",
  color: "red",
  margin: "10px",
  background: "white",
};

export default Hello;
