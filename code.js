function getComputerChoice() {
    return Math.random() * 100;
}

function getHumanChoice() {
    let input = prompt(`rock, paper, or scissors?`);
    return input;
}

let humanScore = 0;
let computerScore = 0;