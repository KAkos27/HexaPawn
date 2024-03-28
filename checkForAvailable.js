import giveClassNames from "./giveClassNames.js";
import pawnClassNames from "./pawnClassNames.js";
let clickedPawn;

const checkForAvailable = (pawns, pawn, event) => {
  if (!pawn.className.includes("available")) {
    giveClassNames(pawnClassNames);
    const pawnId = parseInt(pawn.dataset.buttonId);
    const pawnIsLeft = pawnId % 3 === 0;
    const pawnIsRigth = pawnId % 3 === 2;
    const toMakeAvailable = [];
    if (pawnIsLeft) {
      if (pawn.className.includes("black")) {
        if (pawns[pawnId + 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId + 3);
        }
        if (pawns[pawnId + 4].className.includes("whitePawn")) {
          toMakeAvailable.push(pawnId + 4);
        }
      } else {
        if (pawns[pawnId - 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId - 3);
        }
        if (pawns[pawnId - 2].className.includes("blackPawn")) {
          toMakeAvailable.push(pawnId - 2);
        }
      }
    } else if (pawnIsRigth) {
      if (pawn.className.includes("black")) {
        if (pawns[pawnId + 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId + 3);
        }
        if (pawns[pawnId + 2].className.includes("whitePawn")) {
          toMakeAvailable.push(pawnId + 2);
        }
      } else {
        if (pawns[pawnId - 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId - 3);
        }
        if (pawns[pawnId - 4].className.includes("blackPawn")) {
          toMakeAvailable.push(pawnId - 4);
        }
      }
    } else {
      if (pawn.className.includes("black")) {
        if (pawns[pawnId + 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId + 3);
        }
        if (pawns[pawnId + 2].className.includes("whitePawn")) {
          toMakeAvailable.push(pawnId + 2);
        }
        if (pawns[pawnId + 4].className.includes("whitePawn")) {
          toMakeAvailable.push(pawnId + 4);
        }
      } else {
        if (pawns[pawnId - 3].className.includes("invisible")) {
          toMakeAvailable.push(pawnId - 3);
        }
        if (pawns[pawnId - 4].className.includes("blackPawn")) {
          toMakeAvailable.push(pawnId - 4);
        }
        if (pawns[pawnId - 2].className.includes("blackPawn")) {
          toMakeAvailable.push(pawnId - 2);
        }
      }
    }
    for (let i = 0; i < toMakeAvailable.length; i++) {
      const index = toMakeAvailable[i];
      const currentPawn = pawns[index];
      if (currentPawn.className.includes("invisible")) {
        currentPawn.classList.remove("invisible");
      }
      currentPawn.classList.add("available");
    }
  }

  clickedPawn = event.target;
};

export { checkForAvailable, clickedPawn };
