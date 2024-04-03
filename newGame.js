import pawnClassNames from "./pawnClassNames.js";
import giveClassNames from "./giveClassNames.js";

const newGame = () => {
  pawnClassNames[0] = "blackPawn";
  pawnClassNames[1] = "blackPawn";
  pawnClassNames[2] = "blackPawn";
  pawnClassNames[3] = "invisible";
  pawnClassNames[4] = "invisible";
  pawnClassNames[5] = "invisible";
  pawnClassNames[6] = "whitePawn";
  pawnClassNames[7] = "whitePawn";
  pawnClassNames[8] = "whitePawn";

  giveClassNames(pawnClassNames);
};

export default newGame;
