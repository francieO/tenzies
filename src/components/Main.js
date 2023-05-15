import React from "react";

function Main(props) {
  return (
    <div className="main-container">
      <div className="background">
        {" "}
        <div className="foreground-content">
          {" "}
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="buttons">
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
          </div>
          <div className="roll-button">
            <button>Roll</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
