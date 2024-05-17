
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
    console.log("You chose: " + humanChoice)
    console.log("Computer chose: " + computerChoice)

    if (humanChoice == computerChoice) {
        console.log("Oooo, we have a tie!" );
    }
    
    // human wins
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
            (humanChoice == "Paper" && computerChoice == "Rock") || 
            (humanChoice == "Scissors" && computerChoice == "Paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore += 1;
    }

    // computer wins
    else {
        console.log("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore += 1;
    }

    return;
}


let playGame = () => {
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        console.log("Round: " + (i + 1));

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)

        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("\n");
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You win against the computer.")
        
    }
    else {
        console.log("Aww, you lost! I'm sure you'll win next time! Good luck")
    }
    console.log("Your final score is: " + humanScore);
    console.log("Final computer's score: " + computerScore);
}

playGame();
