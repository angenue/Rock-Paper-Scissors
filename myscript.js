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

    function game() {
        let playerWins = 0;
        let computerWins = 0;

        for (let i = 0; i <= 5; i++) {
            let playerSelection = prompt("Rock, Paper, or Scissors?")
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection)

            if (playRound(playerSelection, computerSelection) === "It is a Tie!") {
                playerWins++;
                computerWins++;
            }
            else if (playRound(playerSelection, computerSelection) === "You Won!") {
                playerWins++;
            }
            else {
                computerWins++;
            }

            console.log("Round " + i + `|| Player Points: ${playerWins} || Computer Points: ${computerWins}`);
         }

         if (playerWins == computerWins){
            console.log("It is a Tie!")
         }
         else if (playerWins > computerWins) {
            console.log("You Won!")
         }
         else {
            console.log("You Lost!")
         }
    }

    console.log(game());
    
      