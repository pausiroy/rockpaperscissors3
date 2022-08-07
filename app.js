const player = document.querySelector("#playerText");
const computer = document.querySelector("#computerText");
const result = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
}))

function computerTurn(){
    const randNum = Math.floor(Math.random()*3) + 1
}