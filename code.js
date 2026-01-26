function getComputerChoice() {
    return Math.random() * 100;
}

function getHumanChoice() {
    let input = prompt(`rock, paper, or scissors?`);
    return input;
}

console.log(getHumanChoice());