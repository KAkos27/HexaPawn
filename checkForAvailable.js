let clickedPawnIndex;

const checkForAvailable = (element, list, event) => {
  if (element.className !== "available") {
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
      }
    });
  }
  clickedPawnIndex = event.target.dataset.buttonId;
};

export { checkForAvailable, clickedPawnIndex };
