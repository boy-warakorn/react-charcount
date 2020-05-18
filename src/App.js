import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    textInput: "",
  };

  checkLengthHandler = (event) => {
    let text = event.target.value;

    this.setState({ textInput: text });
  };

  deleteCharHandler = (index) => {
    const text = this.state.textInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ textInput: updatedText });
  };

  render() {
    const charList = this.state.textInput.split("").map((char, index) => {
      return (
        <Char
          char={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          onChange={this.checkLengthHandler}
          value={this.state.textInput}
        />
        <p>{this.state.textInput}</p>
        <Validation length={this.state.textInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
