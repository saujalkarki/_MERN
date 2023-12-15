import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";
import { useState } from "react";

export function TicTacToe() {
  const [inpXO, setInpXO] = useState("X");

  function handleClick(e) {
    setInpXO(inpXO === "X" ? "O" : "X");
    e.target.value = inpXO;
    e.target.disabled = true;
  }

  function handleReset() {
    console.log("reseted");
    setInpXO("");
  }

  return (
    <>
      <Header />
      <Game onClick={handleClick} />
      <Footer onReset={handleReset} />
    </>
  );
}
