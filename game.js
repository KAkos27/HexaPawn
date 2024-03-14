import clickOnPawn from "./clickonpawn.js";

const game = () => {
  const blackPawns = document.querySelectorAll(".blackPawn");
  const whitePawns = document.querySelectorAll(".whitePawn");

  clickOnPawn(blackPawns);
  clickOnPawn(whitePawns);

  const pawnsPos = [
    blackPawns[0],
    blackPawns[1],
    blackPawns[2],
    ,
    ,
    ,
    whitePawns[0],
    whitePawns[1],
    whitePawns[2],
  ];
};

export default game;
