let humanScore = 0;
let computerScore = 0;
let round = 1;

const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");
const results = document.querySelector("#results")

var content = document.createElement("div");
content.textContent = "Round " + round + " of 5";
results.appendChild(content);

rock_btn.addEventListener("click", () => {
    compChoice = getComputerChoice();
    playRound("rock", compChoice);
});

paper_btn.addEventListener("click", () => {
    compChoice = getComputerChoice();
    playRound("paper", compChoice);
});

scissors_btn.addEventListener("click", () => {
    compChoice = getComputerChoice();
    playRound("scissors", compChoice);
});



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
            var content = document.createElement("div");
            content.textContent = "It's a Tie!";
            results.appendChild(content);
        }
        else if (computerChoice == "paper") {
            console.log("You Lose! Paper beats Rock.");
            var content = document.createElement("div");
            content.textContent = "You Lose! Paper beats Rock.";
            results.appendChild(content);
            computerScore += 1;
        }
        else {
            console.log("You Win! Rock beats Scissors.");
            var content = document.createElement("div");
            content.textContent = "You Win! Rock beats Scissors.";
            results.appendChild(content);
            humanScore += 1;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You Win! Paper beats Rock.");
            var content = document.createElement("div");
            content.textContent = "You Win! Paper beats Rock.";
            results.appendChild(content);
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("It's a Tie!");
            var content = document.createElement("div");
            content.textContent = "It's a Tie!";
            results.appendChild(content);
        }
        else {
            console.log("You Lose! Scissors beats Paper.");
            var content = document.createElement("div");
            content.textContent = "You Lose! Scissors beats Paper.";
            results.appendChild(content);
            computerScore += 1;
        }
    }

    else {
        if (computerChoice == "rock") {
            console.log("You Lose! Rock beats Scissors.");
            var content = document.createElement("div");
            content.textContent = "You Lose! Rock beats Scissors.";
            results.appendChild(content);
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("You Win! Scissors beats Paper.");
            var content = document.createElement("div");
            content.textContent = "You Win! Scissors beats Paper.";
            results.appendChild(content);
            humanScore += 1;
        }
        else {
            console.log("It's a Tie!");
            var content = document.createElement("div");
            content.textContent = "It's a Tie!";
            results.appendChild(content);
        }
    }

    var content = document.createElement("div");
    content.textContent = "Your score: " + humanScore;
    results.appendChild(content);
    var content = document.createElement("div");
    content.textContent = "Computer score: " + computerScore;
    results.appendChild(content);
    var content = document.createElement("div");
    content.textContent = "-----";
    results.appendChild(content);

    if (round >= 5) {
        if (humanScore > computerScore) {
            console.log("You win the game with a score of " + humanScore + "! The computer had a score of " + computerScore + ".");
            var content = document.createElement("div");
            content.textContent = "You win the game with a score of " + humanScore + "! The computer had a score of " + computerScore + ".";
            results.appendChild(content);
        }
        else if (computerScore > humanScore) {
            console.log("You lost the game with a score of " + humanScore + ". The computer had a score of " + computerScore + ".");
            var content = document.createElement("div");
            content.textContent = "You lost the game with a score of " + humanScore + ". The computer had a score of " + computerScore + ".";
            results.appendChild(content);
        }
        else {
            console.log("You tied the game with a score of " + humanScore + ".");
            var content = document.createElement("div");
            content.textContent = "You tied the game with a score of " + humanScore + ".";
            results.appendChild(content);
        }

        humanScore = 0;
        computerScore = 0;
        round = 0;
        var content = document.createElement("div");
        content.textContent = "-----";
        results.appendChild(content);
        var content = document.createElement("div");
        content.textContent = "-----";
        results.appendChild(content);
        var content = document.createElement("div");
        content.textContent = "-----";
        results.appendChild(content);
    }

    round++;

    var content = document.createElement("div");
    content.textContent = "Round " + round + " of 5";
    results.appendChild(content);
}






/*
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
*/