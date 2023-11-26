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

let compSelection = getComputerChoice("Rock", "Paper", "Sciccors");
console.log(compSelection);

let playerSelection = prompt("choose your weapon")
function playRound (playerSelection, compSelection){
    if (playerSelection == "Rock" && compSelection == "Paper"){
        console.log("You lose! Paper beats Rock")
    }
    else{
        console.log("They were not same")
    }
}