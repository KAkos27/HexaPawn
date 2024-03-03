import generateBoard from "./generateBoard.js";
import clickOnPawnAction from "./clickOnPawnAction.js";

generateBoard();

const blackPawns = document.querySelectorAll(".blackPawn");
const whitePawns = document.querySelectorAll(".whitePawn");

clickOnPawnAction(blackPawns);
clickOnPawnAction(whitePawns);
