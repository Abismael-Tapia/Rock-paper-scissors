const containerElement = document.querySelector(".elementsContainer");
const containerH2 = document.querySelector("#secondContainer");
const score = document.querySelector(".scoreContainer");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
var computerScore = document.getElementById("scoreComp");
var playerScore = document.getElementById("scorePla");
var tieScore = document.getElementById("scoreTie");
var messageOnScreen = document.querySelector(".message");
var date = new Date();
const dateYear = document.querySelector(".year");
date = date.getFullYear();
dateYear.textContent = date;
const elements = ["rock", "paper", "scissors"];
var scoreComputer = 0;
var scorePlayer = 0;
var scoreTie = 0;

//Computer selection
const getComputerChoice = () => {
  let i = Math.floor(Math.random() * 3);

  var computerSelec = elements[i];

  return computerSelec;
};

//Player selection
const playerElement = () => {
  document
    .querySelector(".elementsContainer")
    .addEventListener("click", (e) => {
      playerSelection = e.target.id;
      playRound(getComputerChoice(), playerSelection);
    });
};

var playerSelection = playerElement;

function playRound(computerSelection, playerSelection) {
  if (computerSelection === "paper" && playerSelection === "rock") {
    messageOnScreen.textContent = `You lose ${computerSelection} beats ${playerSelection} :(`;
    scoreComputer++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    messageOnScreen.textContent = `You win ${playerSelection} beats ${computerSelection} :)`;
    scorePlayer++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    messageOnScreen.textContent = `You lose ${computerSelection} beats ${playerSelection} :(`;
    scoreComputer++;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    messageOnScreen.textContent = `You win ${playerSelection} beats ${computerSelection} :)`;
    scorePlayer++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    messageOnScreen.textContent = `You lose ${computerSelection} beats ${playerSelection} :(`;
    scoreComputer++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    messageOnScreen.textContent = `You win ${playerSelection} beats ${computerSelection} :)`;
    scorePlayer++;
  } else {
    messageOnScreen.textContent = "TIE";
    scoreTie++;
  }
  if (scoreComputer == 5) {
    alert("The computer wins");
    scoreComputer = 0;
    scorePlayer = 0;
    scoreTie = 0;
    messageOnScreen.textContent = "";
  } else if (scorePlayer == 5) {
    alert("CONGRATS! You WIN :)");
    scoreComputer = 0;
    scorePlayer = 0;
    scoreTie = 0;
    messageOnScreen.textContent = "";
  }
  computerScore.textContent = scoreComputer;
  playerScore.textContent = scorePlayer;
  tieScore.textContent = scoreTie;
}
playerElement();

	
       