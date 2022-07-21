const element = ["rock","paper","scissors"];
var scoreComputer = 0;
var scorePlayer = 0;

while(scoreComputer < 5 && scorePlayer < 5){
    game();
    if(scoreComputer == 5){
        alert(`Game over COMPUTER WINS! ${scoreComputer} for ${scorePlayer}`);
    }  if(scorePlayer == 5){
        alert(`Game over YOU WIN! ${scorePlayer} for ${scoreComputer}`);
    }

}
    function game(){
            function getComputerChoice(){
                let i = Math.floor(Math.random()*3);
                let choiceComputer = element[i];
                console.log("Computer selection is: " + choiceComputer);
                return choiceComputer;
        }
                let playerSelection = prompt("Select a element between Rock, Paper or Scissors");
            
                console.log("Player selection is: " + playerSelection);
    
                const computerSelection = getComputerChoice();
                
            function playRound(computerSelection, playerSelection){
    
                computerSelection = computerSelection.toLowerCase();
                playerSelection = playerSelection.toLowerCase();
            
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
                 }
            }
            playRound(computerSelection, playerSelection);
    }
    
  



