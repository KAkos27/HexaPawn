import checkForAvailable from "./checkForAvailable.js";
import generateBoard from "./generateBoard.js";
import giveClassNames from "./giveClassNames.js";

const game = () => {
  const pawnClassNames = [
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "invisible",
    "invisible",
    "invisible",
    "whitePawn",
    "whitePawn",
    "whitePawn",
  ];

  generateBoard();
  giveClassNames(pawnClassNames);

  const pawns = document.querySelectorAll("button");
  pawns.forEach((pawn, i) => {
    pawn.addEventListener("click", () => {
      checkForAvailable(pawn);
    });
  });
};

export default game;
