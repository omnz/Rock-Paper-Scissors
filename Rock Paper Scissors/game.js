let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  let msg = '';
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection.toLowerCase()) {
    msg = "Tie!";
  }
  else if (playerSelection == 'rock' && computerSelection == 'Paper') {
    msg = "You Lose! Paper beats Rock.";
    computerPoints++;
  }
  else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
    msg = "You Win! Rock beats Scissors.";
    playerPoints++;
  }
  else if (playerSelection == 'paper' && computerSelection == 'Rock') {
    msg = "You Win! Paper beats Rock.";
    playerPoints++;
  }
  else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
    msg = "You Lose! Scissors beats Paper.";
    computerPoints++;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
    msg = "You Lose! Rock beats Scissors.";
    computerPoints++;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
    msg = "You Win! Scissors beats Paper.";
    playerPoints++;
  }
  console.log(msg);
  return (playerPoints, computerPoints);
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }

  console.log("Player points: " + playerPoints);
  console.log("Computer points: " + computerPoints);

  if (playerPoints > computerPoints) {
    console.log("You won the game!");
  }
  else if (playerPoints < computerPoints) {
    console.log("You lost the game!");
  }
  else if (playerPoints > computerPoints) {
    console.log("You tied against computer!");
  }
}

game();