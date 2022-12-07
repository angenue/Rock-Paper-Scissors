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

let playerWins = 0, computerWins = 0, rounds=0;

function game(playerSelection) { 
  const gameResults = document.querySelector('#results');

    const computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);
    results;

    if (results === 0) {
      //gameResults.textContent ="You Lost This Round";
      computerWins++;
      rounds++;
    } else if (results === 1) {
      //gameResults.textContent ="You Won This Round";
      playerWins++;
      rounds++;
    } else if (results === -1){
      //gameResults.textContent ="It is a Tie!";
      rounds++;
    }

    gameResults.textContent = `Round: ${rounds} || Player Points: ${playerWins} || Computer Points: ${computerWins}`

if (playerWins === 5 && computerWins < 5) {
  gameResults.textContent ="You Won The Game!";
  computerWins = 0;
  playerWins = 0;
  rounds = 0;
} else if (computerWins ===5 && playerWins < 5) {
  console.log("You Lost The Game!");
  computerWins = 0;
  playerWins = 0;
  rounds = 0;
} else if (playerWins === 5 && computerWins === 5) {
  console.log("The Game Was a Tie!");
  computerWins = 0;
  playerWins = 0;
  rounds = 0;
}

} 


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(game(button.id));
  });
});







