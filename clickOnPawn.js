const clickOnPawn = (pawns) => {
  pawns.forEach((pawn, i) => {
    pawn.addEventListener("click", () => {
      let available = document.querySelectorAll(".available");
      available.forEach((pawn) => {
        pawn.classList.remove("available");
        pawn.classList.add("invisible");
      });
      const invisible = document.querySelectorAll(".invisible");
      invisible[i].classList.remove("invisible");
      invisible[i].classList.add("available");

      available = document.querySelector(".available");
      available.addEventListener("click", () => {
        available.classList.add("whitePawn");
        available.classList.remove("available");
        pawns[i].className = "";
        pawns[i].classList.add("invisible");
      });
    });
  });
};

export default clickOnPawn;
