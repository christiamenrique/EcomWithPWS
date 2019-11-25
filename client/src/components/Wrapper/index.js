import React from "react";
import "./style.scss";

function Wrapper(props) {
  //props.children is used to display whatever you include between the opening and closing tags when invoking a component.
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;