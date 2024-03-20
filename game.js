import generateBoard from "./generateBoard.js";
import giveClassNames from "./giveClassNames.js";
import checkForAvailable from "./checkForAvailable.js";

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

  const blackPawns = document.querySelectorAll(".blackPawn");
  blackPawns.forEach((element) => {
    element.disabled = true;
    element.disabled = false;
  });

  const pawns = document.querySelectorAll("button");
  pawns.forEach((pawn) => {
    pawn.addEventListener("click", () => {
      checkForAvailable(pawn, pawns);
    });
  });
};

export default game;
