function getComputerChoice() {
    let choice = Math.random() * 100;
    if (choice < 33) {
        return `rock`;
    } else if (choice > 67) {
        return 'paper';
    } else {
        return `scissors`;
    }
}

/* function getHumanChoice() {
    let input = prompt(`rock, paper, or scissors?`);
    return input;
} */

const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

scoreDiv.textContent = "Hello! Let's play Rock, Paper, Scissors!";

let humanScore = 0;
let computerScore = 0;

function playGame(input) {

    function playRound(computerChoice) {
    
        if (computerChoice == input) {
                scoreDiv.append(`It's a tie! You both picked ` + computerChoice + `!\n`)
        } else if (computerChoice == 'rock') {
            if (input == 'paper') {
                scoreDiv.append('Rock! You win!\n');
                humanScore++;
            } else if (input == 'scissors') {
                scoreDiv.append('Rock! You lose!\n');
                computerScore++;
            }
        } else if (computerChoice == 'paper') {
            if (input == 'rock') {
                scoreDiv.append('Paper! You lose!\n');
                computerScore++;
            } else if (input == 'scissors') {
                scoreDiv.append('Paper! You win!\n');
                humanScore++;
            }
        } else if (computerChoice == 'scissors') {
            if (input == 'rock') {
                scoreDiv.append('Scissors! You win!\n');
                humanScore++;
            } else if (input == 'paper') {
                scoreDiv.append('Scissors! You lose!\n');
                computerScore++;
            }
        }

    }

    playRound(getComputerChoice());

    scoreDiv.append('Current score is: Computer: ' + computerScore + '\nYou: ' + humanScore + '\n')

}

let rock = document.getElementById("rock").addEventListener("click", function() {playGame("rock")});
let paper = document.getElementById("paper").addEventListener("click", function() {playGame("paper")});
let scissors = document.getElementById("scissors").addEventListener("click", function() {playGame("scissors")});