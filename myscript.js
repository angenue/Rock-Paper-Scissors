function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random()*computerChoices.length); //get random index
    let randomElement = computerChoices[randomIndex];

    return randomElement;
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        let winOrLose = '';
        
        if (playerSelection === computerSelection) {
            winOrLose = "It is a Tie!"
        }
        else if (playerSelection == "rock" && computerSelection == "Paper") {
            winOrLose = "You Lose! Paper beats Rock"
        }
        else if (playerSelection == "paper" &&computerSelection == "Scissors"){
            winOrLose = "You Lose! Scissors beats Paper"
        }
        else if (playerSelection == "scissors" && computerSelection == "Rock"){
            winOrLose = "You Lose! Rock beats Scissors"
        }
        else {
            winOrLose = "You Won!"
        }

        return winOrLose;
    }
       
      const playerSelection = "Paper";
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));