import React from "react";

const Validation = (props) => {
  let textLength = props.length;
  let validText = null;
  if (textLength >= 5) {
    validText = <h1>Text long enough</h1>;
  } else {
    validText = <h1>Text too short</h1>;
  }
  return <div>{validText}</div>;
};

export default Validation;
