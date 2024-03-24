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
          availablePawn.removeEventListener("click", () => {
            clickOnAvailable(pawnClassNames);
          });
          availablePawn.className = "invisible";
        });
        invisiblePawn.className = "available";
      }
    });
  }
};

export default checkForAvailable;
