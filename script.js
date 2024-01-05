//script

let players = document.querySelector('players')
let buttons = document.querySelector('buttons')

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

//let getPlayerSelection = prompt("choose your weapon")
let playerSelection = getPlayerSelection.toLowerCase();
console.log(playerSelection)


function playRound (playerSelection, compSelection){

    if (playerSelection === "rock" && compSelection === "paper"){
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

console.log(playRound(playerSelection, compSelection));


function game() {
    let finalScore = 0;

    for (let i = 0; i < 5; i++) {
        let score = playRound(playerSelection, compSelection);
        finalScore += score;

        console.log(`Score ${i + 1}: ${score}`);
    }

return finalScore;
}

buttons.addEventListener('click'){
    alert('game started')
}

let finalScore = game();
console.log(`End score: ${finalScore}`)