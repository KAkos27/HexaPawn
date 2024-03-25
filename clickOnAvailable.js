import pawnClassNames from "./pawnClassNames.js";
import giveClassNames from "./giveClassNames.js";
import { clickedPawnIndex } from "./checkForAvailable.js";

const clickOnAvailable = (event) => {
  const available = event.target;
  if (available.className === "available") {
    const targetIndex = available.dataset.buttonId;
    const temporary = pawnClassNames[clickedPawnIndex];
    pawnClassNames[clickedPawnIndex] = pawnClassNames[targetIndex];
    pawnClassNames[targetIndex] = temporary;
    setTimeout(() => {
      giveClassNames(pawnClassNames);
    }, 1);
  }
};

window.clickOnAvailable = clickOnAvailable;
export default clickOnAvailable;
