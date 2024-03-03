const clickOnPawnAction = (pawns) => {
  pawns.forEach((pawn, i) => {
    pawn.addEventListener("click", () => {
      const available = document.querySelectorAll(".available");
      available.forEach((pawn) => {
        pawn.classList.remove("available");
        pawn.classList.add("invisible");
      });
      const invisible = document.querySelectorAll(".invisible");
      invisible[i].classList.remove("invisible");
      invisible[i].classList.add("available");
    });
  });
};

export default clickOnPawnAction;
