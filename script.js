/*
Your game is going to play against the computer, 
so begin with a function called getComputerChoice 
that will randomly return either ‘Rock’, ‘Paper’ 
or ‘Scissors’. We’ll use this function in the game 
to make the computer’s play. Tip: use the console 
to make sure this is returning the expected output 
before moving to the next step!
*/

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
        return "You win! Paper beats rock";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
