let humanScore = 0
let computerScore = 0

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

let compChoice = getComputerChoice()
let humChoice = getHumanChoice()

console.log("Your choice: "+humChoice);
console.log("Computer choice : "+compChoice);
playRound(humChoice, compChoice)