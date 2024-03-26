let clickedPawn;

const checkForAvailable = (element, list, event) => {
  if (!element.className.includes("available")) {
    const reClassIndex =
      element.className === "blackPawn"
        ? parseInt(element.dataset.buttonId) + 3
        : parseInt(element.dataset.buttonId) - 3;
    list.forEach((invisiblePawn) => {
      if (parseInt(invisiblePawn.dataset.buttonId) === reClassIndex) {
        const available = document.querySelectorAll(".available");
        available.forEach((availablePawn) => {
          if (availablePawn.className.includes("Pawn")) {
            availablePawn.classList.remove("available");
          } else {
            availablePawn.classList.remove("available");
            availablePawn.classList.add("invisible");
          }
        });
        invisiblePawn.classList.remove("invisible");
        invisiblePawn.classList.add("available");
      }
    });
  }
  clickedPawn = event.target;
};

export { checkForAvailable, clickedPawn };
