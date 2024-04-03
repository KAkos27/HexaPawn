import pawnClassNames from "./pawnClassNames.js";
import giveClassNames from "./giveClassNames.js";
import checkForWinner from "./checkForWinner.js";
import { clickedPawn } from "./checkForAvailable.js";

const clickOnAvailable = (event) => {
  const clickedPawnIndex = clickedPawn.dataset.buttonId;
  const available = event.target;
  const targetIndex = available.dataset.buttonId;

  if (available.className.includes("available")) {
    const temporary = pawnClassNames[clickedPawnIndex];
    pawnClassNames[clickedPawnIndex] = available.className.includes("Pawn")
      ? "invisible"
      : pawnClassNames[targetIndex];
    pawnClassNames[targetIndex] = temporary;

    setTimeout(() => {
      giveClassNames(pawnClassNames);
    }, 1);

    setTimeout(() => {
      checkForWinner(pawnClassNames);
    }, 250);
  }
};

window.clickOnAvailable = clickOnAvailable;
