function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];

  let randomIndex = Math.floor(Math.random() * computerChoices.length); //get random index
  let randomElement = computerChoices[randomIndex];

  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return -1;
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return 0;
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    return 0;
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    return 0;
  } else {
    return 1;
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i <= 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();

    let results = playRound(playerSelection, computerSelection);
    results;

    if (results === 0) {
      console.log("You Lost This Round");
      computerWins++;
    } else if (results === 1) {
      console.log("You Won This Round");
      playerWins++;
    } else if (results === -1){
      console.log("It is a Tie!");
    }

    console.log(
      `Round ${i} || Player Points: ${playerWins} || Computer Points: ${computerWins}`
    );
  }

  if (playerWins > computerWins) {
    console.log("You Won The Game!");
  } else if (playerWins < computerWins) {
    console.log("You Lost The Game!");
  } else {
    console.log("The Game Was a Tie!");
  }
}

console.log(game());
