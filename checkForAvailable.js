import clickOnAvailable from "./clickOnAvailable.js";

const checkForAvailable = (element, list, pawnClassNames) => {
  if (element.className != "available") {
    const reClassIndex =
      element.className === "blackPawn"
        ? parseInt(element.dataset.buttonId) + 3
        : parseInt(element.dataset.buttonId) - 3;
    list.forEach((invisiblePawn) => {
      if (parseInt(invisiblePawn.dataset.buttonId) === reClassIndex) {
        const available = document.querySelectorAll(".available");
        available.forEach((availablePawn) => {
          availablePawn.className = "invisible";
        });
        invisiblePawn.className = "available";
        invisiblePawn.addEventListener("click", () => {
          clickOnAvailable(pawnClassNames);
        });
      }
    });
  }
};

export default checkForAvailable;
