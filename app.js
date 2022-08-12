const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`; 
    resultText.textContent = checkWinner();
}))

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
 
function checkWinner(){
    const playerScoreBoard= document.querySelector(".playerCount");
    const computerScoreBoard= document.querySelector(".computerCount");
    if(player == computer) {
        return "Draw!";
    }
    else if(computer == "ROCK") {
        if (player == "PAPER") {
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            return "Player Won";
        } else{ 
            computerScore++;
            computerScoreBoard.textContent=computerScore;
            return "Computer Won";
        }
    } 
    else if(computer == "PAPER") {
        if (player == "SCISSORS") {
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            return "Player Won!"
        } else{
            computerScore++;
            computerScoreBoard.textContent=computerScore;
            return "Computer Won!";
        }
    } 

    else if(computer == "SCISSORS") {
        if (player == "ROCK") {
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            return "Player Won!";
        } else{
            computerScore++;
            computerScoreBoard.textContent=computerScore;
            return "Computer Won!";
        }
    } 

}
