import pawnClassNames from "./pawnClassNames.js";
import giveClassNames from "./giveClassNames.js";

const clickOnAvailable = (event) => {
  const available = event.target;
  if (available.className === "available") {
    const targetIndex = available.dataset.buttonId;
    let temporary = pawnClassNames[6];
    pawnClassNames[6] = pawnClassNames[targetIndex];
    pawnClassNames[targetIndex] = temporary;
    giveClassNames(pawnClassNames);
  }
};

window.clickOnAvailable = clickOnAvailable;
export default clickOnAvailable;
