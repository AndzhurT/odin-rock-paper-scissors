
let humanScore = 0;
let computerScore = 0;

// function declaration - global 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length); 
    
    return choices[randomChoice];
}

let getHumanChoice = () => {
    humanChoice = prompt("What would you choose? Rock, Paper or Scissors?");
    humanChoice = capitalize(humanChoice);

    return humanChoice;
}

function capitalize(text) {
    if (text) return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
    else {
        return text
    }
}


let playRound = (humanChoice, computerChoice) => {
    // tie
    if (humanChoice == computerChoice) {
        print("Oooo, we have a tie! " + humanChoice + " and " + computerChoice + " are the same");
    }
    
    // human wins
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
            (humanChoice == "Paper" && computerChoice == "Rock") || 
            (humanChoice == "Scissors" && computerChoice == "Paper")) {
                print("You win! " + humanChoice + " beats " + computerChoice);
                humanScore += 1;
    }

    // computer wins
    else {
        print("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore += 1;
    }
    
    return;
}


let playGame = () => {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }

    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
}

playGame();
