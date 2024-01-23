//script
let playerSelection;

function handleButtonClick(selection){
    playerSelection = selection;
    console.log(playerSelection)
}

document.querySelector(".rock").addEventListener("click", function(){
    handleButtonClick("ROCK")
    playRound(playerSelection,compSelection)
})

document.querySelector(".paper").addEventListener("click", function(){
    handleButtonClick("PAPER")
    playRound(playerSelection,compSelection)
})

document.querySelector(".scissors").addEventListener("click", function(){
    handleButtonClick("SCISSORS")
    playRound(playerSelection,compSelection)
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

function playRound(player, comp) {

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
}

//function playGame() {
//       
//    for(let i =0; i < 5; i++){
//       
//        playRound(playerSelection,compSelection)
//    }
//}

//playGame()
