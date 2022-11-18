function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random()*computerChoices.length); //get random index
    let randomElement = computerChoices[randomIndex];

    return randomElement;
    }

    console.log(getComputerChoice())