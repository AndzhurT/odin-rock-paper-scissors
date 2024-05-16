


// function declaration - global 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length); 
    
    return choices[randomChoice];
}

console.log(getComputerChoice())


function getHumanChoice() {
    humanChoice = prompt("What would you choose? Rock, Paper or Scissors?");
    return humanChoice;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;