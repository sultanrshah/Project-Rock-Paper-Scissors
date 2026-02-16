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

function getHumanChoice() {
    let input = prompt(`rock, paper, or scissors?`);
    return input;
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const fixedHumanChoice = humanChoice.toLowerCase();
    
        if (computerChoice == fixedHumanChoice) {
                console.log(`It's a tie! You both picked ` + computerChoice + `!`)
        } else if (computerChoice == 'rock') {
            if (humanChoice == 'paper') {
                console.log('Rock! You win!');
                humanScore++;
            } else if (humanChoice == 'scissors') {
                console.log('Rock! You lose!');
                computerScore++;
            }
        } else if (computerChoice == 'paper') {
            if (humanChoice == 'rock') {
                console.log('Paper! You lose!');
                computerScore++;
            } else if (humanChoice == 'scissors') {
                console.log('Paper! You win!');
                humanScore++;
            }
        } else if (computerChoice == 'scissors') {
            if (humanChoice == 'rock') {
                console.log('Scissors! You win!');
                humanScore++;
            } else if (humanChoice == 'paper') {
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

playGame();