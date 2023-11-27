//script

function getComputerChoice (choice1, choice2, choice3) {
    let choice = Math.floor(Math.random() * 3)
        switch (choice) {
            case 0:
                return choice1;
            break;

            case 1:
                return choice2;
            break;

            case 2:
                return choice3;
            break;
        }

}

let compSelection = getComputerChoice("rock", "paper", "sciccors");
console.log(compSelection);

let getPlayerSelection = prompt("choose your weapon")
let playerSelection = getPlayerSelection.toLowerCase();
console.log(playerSelection)

function playRound (playerSelection, compSelection){
    if (playerSelection == "rock" && compSelection == "paper"){
        return("You lose! Paper beats Rock")
    }
    else if (playerSelection === "paper" && compSelection === "scissors"){
        return ("You lose! scissors beats paper")
    }
    else if (playerSelection === "scissors" && compSelection=== "rock"){
        return ("You lose! rock beats sciccors")
    }
    else if (playerSelection === compSelection){
        return ("It was a draw ")
    }
    else {
        return ("You won!")
    }
}

let result = playRound(playerSelection, compSelection);

let score = 0 

function game() {
    for(i = 0; i < 5; i++);
}
if (result == "You won!") {
    score++;
}


console.log(score)
console.log(result)

