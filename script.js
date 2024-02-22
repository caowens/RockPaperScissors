
// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // Random number between 0 and 2
    let num = getRandom(3);
    if (num === 0) {
        return "ROCK";
    }
    else if (num === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

// Write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  // your code here!
  playerSelection = playerSelection.toUpperCase();

  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  else if (playerSelection == "ROCK") {
    if (computerSelection == "PAPER") {
        return "You Lose! Paper beats rock.";
    }
    else {
        return "You Win! Rock beats scissors.";
    }
  }
  else if (playerSelection == "SCISSORS") {
    if (computerSelection == "PAPER") {
        return "You Win! Scissors beats paper.";
    }
    else {
        return "You Lose! Rock beats scissors.";
    }
  }
  else {
    if (computerSelection == "SCISSORS") {
        return "You Lose! Scissors beats paper.";
    }
    else {
        return "You Win! Paper beats rock";
    }
  }
}
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// Write a NEW function called playGame(). 
// Use the previous function inside of this one 
// to play a five round game that keeps score and 
// reports a winner or loser at the end.
function playGame() {
    let playerScore = 0;
    let computerScore  = 0;
    playerSelections = ["Rock", "Paper", "Scissors", "Paper", "Rock"];
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerSelections[i];
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.length > 4) {
            console.log(result[4]);
            if (result[4] === "L") {
                computerScore++;
            }
            else {
                playerScore++;
            }
        }
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }


}
playGame();
