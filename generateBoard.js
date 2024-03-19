const generateBoard = () => {
  const board = document.querySelector(".board");
  for (let i = 0; i < 9; i++) {
    let squareClassName;
    i % 2 === 0 ? (squareClassName = "black") : (squareClassName = "white");
    board.innerHTML += `<span class='${
      "square " + squareClassName
    }'><button data-button-id=${i}></button></span>`;
  }
};

export default generateBoard;
