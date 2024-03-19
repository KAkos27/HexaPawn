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

  const availables = document.querySelectorAll(".available");
  availables.forEach((available) => {
    available.addEventListener("click", () => {
      clickOnAvailable(availables);
    });
  });
};

export default game;
