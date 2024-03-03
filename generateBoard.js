const generateBoard = () => {
  const board = document.querySelector(".board");

  for (let i = 0; i < 9; i++) {
    let squareClassName;
    i % 2 === 0 ? (squareClassName = "black") : (squareClassName = "white");
    let buttonClassName = "invisible";
    if (i < 3 || i > 5) {
      i < 3 ? (buttonClassName = "blackPawn") : (buttonClassName = "whitePawn");
    }
    board.innerHTML += `<span class=${squareClassName}><button class=${buttonClassName}></button></span>`;
  }
};

export default generateBoard;
