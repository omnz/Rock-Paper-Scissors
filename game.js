const pPoints = document.querySelector('#playerPoints');
const cPoints = document.querySelector('#computerPoints');
const outcome = document.querySelector('#outcome');
const pChoice = document.querySelector('#pChoice');
const cChoice = document.querySelector('#cChoice');
const victory = document.querySelector('#victory');
const turnsElement = document.querySelector('#turns');

let playerPoints = 0;
let computerPoints = 0;
let turns = 5;

pPoints.className = 'text';
cPoints.className = 'text';
turnsElement.innerHTML = turns;

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  let msg = '';
  playerSelection = playerSelection.toLowerCase();

  // Check who won round
  if (playerSelection == computerSelection.toLowerCase()) {
    msg = "Tie!";
  }
  else if (playerSelection == 'rock' && computerSelection == 'Paper') {
    msg = "Rock < Paper";
    computerPoints++;
    turns--;
  }
  else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
    msg = "Rock > Scissors.";
    playerPoints++;
    turns--;
  }
  else if (playerSelection == 'paper' && computerSelection == 'Rock') {
    msg = "Paper > Rock";
    playerPoints++;
    turns--;
  }
  else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
    msg = "Paper < Scissors";
    computerPoints++;
    turns--;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
    msg = "Scissors < Rock";
    computerPoints++;
    turns--;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
    msg = "Scissors > Paper";
    playerPoints++;
    turns--;
  }

  // Update turn
  turnsElement.innerHTML = turns;

  // Update turn outcome
  outcome.innerHTML = msg;

  return (playerPoints, computerPoints);
}

function game(playerChoice) {
  if (turns != 0) {
    const computerSelection = computerPlay();

    // Update player and computer choice
    pChoice.innerHTML = playerChoice;
    cChoice.innerHTML = computerSelection;

    playRound(playerChoice, computerSelection);

    // Update current points
    pPoints.innerHTML = playerPoints;
    cPoints.innerHTML = computerPoints;

    // Check who won the game
    if (turns == 0) {
      if (playerPoints > computerPoints) {
        victory.innerHTML = "You won the game!";
      }
      else if (playerPoints < computerPoints) {
        victory.innerHTML = "You lost the game!";
      }
      else if (playerPoints == computerPoints) {
        victory.innerHTML = "You tied against computer!";
      }
    }
  }
}