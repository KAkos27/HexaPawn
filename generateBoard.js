const generateBoard = () => {
  const board = document.querySelector(".board");
  for (let i = 0; i < 9; i++) {
    let squareClassName;
    squareClassName = i % 2 === 0 ? "black" : "white";
    board.innerHTML += `<span class='${
      "square " + squareClassName
    }'><button data-button-id=${i} onclick='clickOnAvailable(event)'></button></span>`;
  }
};

export default generateBoard;
