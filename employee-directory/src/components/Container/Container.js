import React from "./node_modules/react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;