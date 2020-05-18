import React from "react";
import "./Char.css";

const Char = (props) => {
  return (
    <div className="char-box" onClick={props.clicked}>
      {props.char}
    </div>
  );
};

export default Char;
