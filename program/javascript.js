const elements = ["rock" , "paper" , "scissors"];
var scoreComputer = 0;
var scorePlayer = 0;
var scoreTie = 0;

    alert("PLEASE OPEN CONSOLE TOOL BEFORE");

function getComputerChoice(){

	let i = Math.floor(Math.random() * 3);

	var computerSelection = elements[i];

	return computerSelection;
}

function playerChoice(){

	var playerSelection = prompt(`Select a element between ${elements.join(" ")}.`)

	playerSelection = playerSelection.toLowerCase();

	return playerSelection;
}

function playRound(computerSelection, playerSelection){

	console.log(`Computer Selection is: ${computerSelection}`);

	console.log(`Player Selection is: ${playerSelection}`);

	if (computerSelection === "paper" && playerSelection === "rock"){
                console.log(`You lose ${computerSelection} beats ${playerSelection} :(` );
                scoreComputer++;
    }else if (computerSelection === "paper" && playerSelection === "scissors"){
                console.log(`You win ${playerSelection} beats ${computerSelection} :)`);
                scorePlayer++;
    }else if (computerSelection === "rock" && playerSelection === "scissors"){
                console.log(`You lose ${computerSelection} beats ${playerSelection} :(`);
                scoreComputer++;
    }else if (computerSelection === "rock" && playerSelection === "paper"){
                console.log(`You win ${playerSelection} beats ${computerSelection} :)`);
                scorePlayer++;
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
                console.log(`You lose ${computerSelection} beats ${playerSelection} :(`);
                scoreComputer++;
    }else if (computerSelection === "scissors" && playerSelection === "rock"){
                console.log(`You win ${playerSelection} beats ${computerSelection} :)`);
                scorePlayer++;
    }else {
        console.log("TIE");
        scoreTie++;
    }
}
function game (){

	for (var i = 1; i <= 5; i++) {

		playRound(getComputerChoice(), playerChoice());

	if (i == 5) {

		console.log(`Final Score is 
			COMPUTER SCORE: ${scoreComputer}
			PLAYER SCORE: ${scorePlayer}
			TIE GAMES: ${scoreTie}`)

        var scoreHTML = `Final Score is <br>
            COMPUTER SCORE: ${scoreComputer} <br>
            PLAYER SCORE: ${scorePlayer} <br>
            TIE GAMES: ${scoreTie}`

            document.getElementById("showScore").innerHTML = scoreHTML;

		    }

	    }
            scoreComputer = 0;
            scorePlayer = 0;
            scoreTie = 0;
        }
	
       