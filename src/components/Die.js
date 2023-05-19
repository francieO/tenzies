import React from "react";
import "../Die.css";

function Die(props) {
  const styles = {
    backgroundColor: props.hold ? "#59E391" : "white",
  };

  let dots = [];

  for (let i = 0; i < props.value; i++) {
    dots.push(<div key={i} className="dot"></div>);
  }

  return (
    <div onClick={props.holdDie} className="die-face" style={styles}>
      {/* <h2 className="num">{props.value}</h2> */}
      {dots}
    </div>
  );
}

export default Die;
