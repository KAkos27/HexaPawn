import generateBoard from "./generateBoard.js";
import pawnClassNames from "./pawnClassNames.js";
import giveClassNames from "./giveClassNames.js";
import checkForAvailable from "./checkForAvailable.js";

const game = () => {
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
      checkForAvailable(pawn, pawns, pawnClassNames);
    });
  });
};

export default game;
