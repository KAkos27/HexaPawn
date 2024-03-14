const generateBoard = () => {
  const board = document.querySelector(".board");
  for (let i = 0; i < 9; i++) {
    let squareClassName;
    i % 2 === 0 ? (squareClassName = "black") : (squareClassName = "white");
    board.innerHTML += `<span class='${
      "square " + squareClassName
    }' square-id=${i}><button></button></span>`;
  }
};

export default generateBoard;
