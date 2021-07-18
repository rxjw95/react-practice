import React from "react";

function Wrapper({ style, children }) {
  return <div style={style}>{children}</div>;
}

export default Wrapper;
