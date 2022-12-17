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

let playerWins = 0, computerWins = 0, rounds = 0;
const gameResults = document.querySelector('#results');
const roundResults = document.querySelector('#winOrLose');

function game(playerSelection) {
  const computerSelection = getComputerChoice();

  /***** html and javascript *****/
  const computer = document.querySelectorAll('.computerChoice > button');

  computer.forEach((computerChoice) => {
    if (computerSelection === computerChoice.className) { //to scale current computer choice
      //computerChoice.classList.add('grow');
       computerChoice.setAttribute('style', 'transform: scale(1.1); border: 1px solid #601155; background: #601155; borderRadius: 100px;') 
    }
    else {
      computerChoice.setAttribute('style', 'transform: scale(1); background: none; border: none;');
    }
});


  let results = playRound(playerSelection, computerSelection);
  results;

  if (results === 0) {
    roundResults.textContent = "You Lost This Round";
    computerWins++;
    rounds++;
  } else if (results === 1) {
    roundResults.textContent = "You Won This Round";
    playerWins++;
    rounds++;
  } else if (results === -1) {
    roundResults.textContent = "It is a Tie!";
    rounds++;
  }

  


  if (playerWins === 5 && computerWins < 5) {
    roundResults.textContent = "You Won The Game!";
    computerWins = 0;
    playerWins = 0;
    rounds = 0;
  } else if (computerWins === 5 && playerWins < 5) {
    roundResults.textContent = "You Lost The Game!";
    computerWins = 0;
    playerWins = 0;
    rounds = 0;
  } else if (playerWins === 5 && computerWins === 5) {
    roundResults.textContent = "The Game Was a Tie!";
    computerWins = 0;
    playerWins = 0;
    rounds = 0;
  }

  gameResults.textContent = `Round: ${rounds} || Player Points: ${playerWins} || Computer Points: ${computerWins}`
  gameResults.appendChild(roundResults);

}


const buttons = document.querySelectorAll('.playerChoice > button');
buttons.forEach((playerChoice) => {
  gameResults.textContent = `Round: ${rounds} || Player Points: ${playerWins} || Computer Points: ${computerWins}`
  playerChoice.addEventListener('click', () => {
    game(playerChoice.className);
  });
});









