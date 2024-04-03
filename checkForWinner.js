import newGame from "./newGame.js";

const checkForWinner = (pawnClassNames) => {
  for (let i = 0; i < 3; i++) {
    if (pawnClassNames[i] === "whitePawn") {
      alert("A Fehér nyert!");
      newGame();
    }
  }
  for (let i = 6; i < 9; i++) {
    if (pawnClassNames[i] === "blackPawn") {
      alert("A Fekete nyert!");
      newGame();
    }
  }
};

export default checkForWinner;
