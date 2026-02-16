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

let scoreDiv = document.createElement("div");

function playGame(input) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice) {
    
        if (computerChoice == input) {
                scoreDiv.append(`It's a tie! You both picked ` + computerChoice + `!`)
        } else if (computerChoice == 'rock') {
            if (input == 'paper') {
                scoreDiv.append('Rock! You win!');
                humanScore++;
            } else if (input == 'scissors') {
                scoreDiv.append('Rock! You lose!');
                computerScore++;
            }
        } else if (computerChoice == 'paper') {
            if (input == 'rock') {
                scoreDiv.append('Paper! You lose!');
                computerScore++;
            } else if (input == 'scissors') {
                scoreDiv.append('Paper! You win!');
                humanScore++;
            }
        } else if (computerChoice == 'scissors') {
            if (input == 'rock') {
                scoreDiv.append('Scissors! You win!');
                humanScore++;
            } else if (input == 'paper') {
                scoreDiv.append('Scissors! You lose!');
                computerScore++;
            }
        }

    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice())
    }

    console.log('Final score is: \nComputer: ' + computerScore + '\nYou: ' + humanScore)

}

let rock = document.getElementById("rock").addEventListener("click", function() {playGame("rock")});
let paper = document.getElementById("paper").addEventListener("click", function() {playGame("paper")});
let scissors = document.getElementById("scissors").addEventListener("click", function() {playGame("scissors")});

playGame();