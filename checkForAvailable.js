let clickedPawn;

const checkForAvailable = (pawns, pawn, event) => {
  if (!pawn.className.includes("available")) {
    const reClassIndex =
      pawn.className === "blackPawn"
        ? parseInt(pawn.dataset.buttonId) + 3
        : parseInt(pawn.dataset.buttonId) - 3;
    pawns.forEach((invisiblePawn) => {
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
