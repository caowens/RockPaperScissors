
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
function playRound(playerSelection) {
  // your code here!
  playerSelection = playerSelection.toUpperCase();
  let computerSelection = getComputerChoice();

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

const btns = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (finalResults.innerText !== '') {
            finalResults.innerText = '';
        }
        let playerChoice = btn.innerText;
        let results = playRound(playerChoice);
        let resultsDiv = document.querySelector('#results');
        resultsDiv.innerText = `Round results: ${results}`;

        if (results.length > 4) {
            if (results[4] === "L") {
                computerScore++;
            }
            else {
                playerScore++;
            }
        }

        let playerScoreDiv = document.querySelector('#playerScore');
        playerScoreDiv.innerText = `Player Score: ${playerScore}`;

        let computerScoreDiv = document.querySelector('#computerScore');
        computerScoreDiv.innerText = `Computer Score: ${computerScore}`;

        if (playerScore === 5 || computerScore == 5) {
            let finalResults = document.querySelector('#finalResults');
            if (playerScore > computerScore) {
                finalResults.innerText = "Congratulations! You win the game!";
            }
            else if (computerScore > playerScore) {
                finalResults.innerText = "Sorry, you've lost the game.";
            }
            else {
                finalResults.innerText = "Looks like you've tied!";
            }
            playerScore = 0;
            computerScore = 0;
        }
    });
})
