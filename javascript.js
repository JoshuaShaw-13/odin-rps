let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.random();
    let randChoice = "rock";

    if (randNum < 0.33) {
        randChoice = "paper";
    }
    else if (randNum > 0.66) {
        randChoice = "scissors";
    }

    return randChoice;
}

function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors: ").toLowerCase();

    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid entry!\nChoose either rock, paper, or scissors: ").toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a Tie!");
        }
        else if (computerChoice == "paper") {
            console.log("You Lose! Paper beats Rock.");
            computerScore += 1;
        }
        else {
            console.log("You Win! Rock beats Scissors.");
            humanScore += 1;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You Win! Paper beats Rock.");
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("It's a Tie!");
        }
        else {
            console.log("You Lose! Scissors beats Paper.");
            computerScore += 1;
        }
    }

    else {
        if (computerChoice == "rock") {
            console.log("You Lose! Rock beats Scissors.");
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("You Win! Scissors beats Paper.");
            humanScore += 1;
        }
        else {
            console.log("It's a Tie!");
        }
    }
}

function playGame() {
    let round = 1;
    let compChoice;
    let humChoice;
    while (round <= 5) {
        console.log("Round " + round + " of 5")
        
        humChoice = getHumanChoice();
        compChoice = getComputerChoice();

        console.log("Your choice: " + humChoice);
        console.log("Computer choice : " + compChoice);

        playRound(humChoice, compChoice);

        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log(" ")

        round++;
    }

    if (humanScore > computerScore) {
        console.log("You win the game with a score of " + humanScore + "! The computer had a score of " + computerScore + ".")
    }
    else if (computerScore > humanScore) {
        console.log("You lost the game with a score of " + humanScore + ". The computer had a score of " + computerScore + ".")
    }
    else {
        console.log("You tied the game with a score of " + humanScore + ".")
    }
}

playGame()