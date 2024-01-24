//script
let playerSelection

function handleButtonClick(selection){
    playerSelection = selection;
    console.log(playerSelection)
}

document.querySelector(".rock").addEventListener("click", function(){
    handleButtonClick("ROCK")
    game()
})

document.querySelector(".paper").addEventListener("click", function(){
    handleButtonClick("PAPER")
    game()
})

document.querySelector(".scissors").addEventListener("click", function(){
    handleButtonClick("SCISSORS")
    game()
})



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

let compSelection = getComputerChoice("ROCK", "PAPER", "SCISSORS");
console.log(compSelection);

    playerScore = 0
    computerScore = 0

    function updateScore(){
        let player = document.querySelector(".player")
        player.textContent = `player: ${playerScore}`

        let comp = document.querySelector(".comp")
        comp.textContent = `Comp: ${computerScore}`
    }

let result = document.querySelector(".results")

let roundsPlayed = 0 

function playRound(player, comp) {

     let compSelection = getComputerChoice("rock", "paper", "scissors")

    if (player === "ROCK" && comp === "PAPER"){
        result.textContent = "You lost, paper beats rock"
        computerScore++
    }

    else if(player === "PAPER" && comp === "SCISSORS"){
        result.textContent = "You lost, scissors beats paper"
        computerScore++
    }

    else if ( player === "SCISSORS" && comp === "ROCK"){
        result.textContent = "You lost, rock beats scissors"
        computerScore++
    }

    else if ( player === comp){
        result.textContent = "It was a draw"
    }

    else {
        result.textContent = "Great choice, you won"
        playerScore++
    }

   
    updateScore()
    roundsPlayed++
}

let final = document.querySelector(".final")

function finalScore(){
    if (computerScore > playerScore){
        final.textContent = `Final Score: You lost by ${computerScore}`
    }

    else if (computerScore === playerScore){
        final.textContent = `Final Score: DRAW`
    }

    else {
        final.textContent = `Final Score: You won by ${playerScore}`
    }
}

function game() {
       
    if(roundsPlayed < 4 ){
        playRound(playerSelection, compSelection)
        
    }

    else if (roundsPlayed === 4){
        result.textContent = "GAME OVER!"
        playerScore = 0
        computerScore = 0
        finalScore()

   }

    
    
}

//playGame()
