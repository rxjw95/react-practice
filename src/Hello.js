import React from "react";

const Hello = ({ name, color }) => {
  return <div style={{ color: color }}>hello, {name}</div>;
};

Hello.defaultProps = {
  name: "jangwook",
  color: "red",
};

export default Hello;
