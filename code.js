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

function playGame(input) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice) {
    
        if (computerChoice == input) {
                console.log(`It's a tie! You both picked ` + computerChoice + `!`)
        } else if (computerChoice == 'rock') {
            if (input == 'paper') {
                console.log('Rock! You win!');
                humanScore++;
            } else if (input == 'scissors') {
                console.log('Rock! You lose!');
                computerScore++;
            }
        } else if (computerChoice == 'paper') {
            if (input == 'rock') {
                console.log('Paper! You lose!');
                computerScore++;
            } else if (input == 'scissors') {
                console.log('Paper! You win!');
                humanScore++;
            }
        } else if (computerChoice == 'scissors') {
            if (input == 'rock') {
                console.log('Scissors! You win!');
                humanScore++;
            } else if (input == 'paper') {
                console.log('Scissors! You lose!');
                computerScore++;
            }
        }

    }

    /* for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    } */

    console.log('Final score is: \nComputer: ' + computerScore + '\nYou: ' + humanScore)

}

let rock = document.getElementById("rock").addEventListener("click", function() {playGame("rock")});
let paper = document.getElementById("paper").addEventListener("click", function() {playGame("paper")});
let scissors = document.getElementById("scissors").addEventListener("click", function() {playGame("scissors")});

playGame();