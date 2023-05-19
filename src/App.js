import "./App.css";
import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);
  // const [rolls, setRolls] = React.useState(localStorage.getItem("rolls") || 0);

  // React.useEffect(() => {
  //   localStorage.setItem("rolls", rolls);
  // }, [rolls]);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.hold);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    allHeld && allSameValue && setTenzies(true);
  }, [dice]);

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      hold: false,
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    return newDice;
  }

  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die, i) => {
        if (die.id === id) {
          return { ...die, hold: !die.hold };
        } else {
          return die;
        }
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      holdDie={() => holdDie(die.id)}
      key={die.id}
      value={die.value}
      hold={die.hold}
    />
  ));

  function resetGame() {
    setDice(allNewDice);
    setTenzies(false);
    // setRolls(0);
  }

  function rollDice() {
    tenzies && resetGame();

    // setRolls((prevRolls) => prevRolls + 1);

    setDice((prevDice) =>
      prevDice.map((die) => {
        if (!die.hold) {
          return { ...die, value: Math.ceil(Math.random() * 6) };
        } else {
          return die;
        }
      })
    );
  }

  return (
    <main>
      <div className="foreground-content">
        {tenzies && (
          <div className="confetti">
            <Confetti />
          </div>
        )}{" "}
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        {/* <p>{rolls}</p> */}
        <button className="roll-button" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}
