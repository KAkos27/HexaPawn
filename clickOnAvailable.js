import giveClassNames from "./giveClassNames.js";

const clickOnAvailable = (pawnClassNames) => {
  let temporary = pawnClassNames[4];
  pawnClassNames[4] = pawnClassNames[7];
  pawnClassNames[7] = temporary;
  giveClassNames(pawnClassNames);
};

export default clickOnAvailable;
