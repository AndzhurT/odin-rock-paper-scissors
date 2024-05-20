
let humanScore = 0;
let computerScore = 0;

// function declaration - global 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length); 
    
    return choices[randomChoice];
}

let playRound = (humanChoice, computerSelected) => {
    // tie
    computerText.textContent = "Computer chose: ";
    computerChoice.textContent = computerSelected;
    computerText.appendChild(computerChoice);

    if (humanChoice == computerSelected) {
        finalRoundText.textContent = "Oooo, we have a tie!";
    }
    
    // human wins
    else if ((humanChoice == "Rock" && computerSelected == "Scissors") || 
            (humanChoice == "Paper" && computerSelected == "Rock") || 
            (humanChoice == "Scissors" && computerSelected == "Paper")) {
                finalRoundText.textContent = "You win! " + humanChoice + " beats " + computerSelected;
                humanScore += 1;
    }

    // computer wins
    else {
        finalRoundText.textContent = "You lose! " + humanChoice + " loses to " + computerSelected;
        computerScore += 1;
    }

    return;
}


let playGame = () => {
    let humanSelection = humanChoice.textContent;
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanScoreText.textContent = "Your score: " + humanScore;
    computerScoreText.textContent = "Computer's score: " + computerScore;

    if (humanScore + computerScore == 5) {
        if (humanScore > computerScore) {
            finalGameText.textContent = "Congrats! You win against the computer.";
            
        }
        else {
            finalGameText.textContent = "Aww, you lost! I'm sure you'll win next time! Good luck";
        }
        
        finalGameText.appendChild(finalGameScore);
        finalHumanScore.textContent = "Your final score is: " + humanScore;
        finalComputerScore.textContent = "Final computer's score: " + computerScore;
        finalGameScore.appendChild(finalHumanScore);
        finalGameScore.appendChild(finalComputerScore);
    }

}


// create elements using JS


// human text
const humanText = document.querySelector(".humanText");
const humanChoice = document.createElement("span");
humanChoice.setAttribute("style","color: #ff7d73;");

// computer text
const computerText = document.querySelector(".computerText");
const computerChoice = document.createElement("span");
computerChoice.setAttribute("style","color: #ff7d73;");

// human score 
const humanScoreText = document.querySelector(".leftContainer");

// computer score
const computerScoreText = document.querySelector(".rightContainer");

// final round text
const finalRoundText = document.querySelector(".finalRoundText");

// final game text / score
const finalGameText = document.querySelector(".finalGameText");
const finalGameScore = document.createElement("div");
finalGameScore.setAttribute("style", "display: flex; align-items: center; flex-direction: column;")

const finalHumanScore = document.createElement("p");
const finalComputerScore = document.createElement("p");

// buttons
const buttons = document.querySelectorAll("button");


function getButtonTarget(e) {
    humanText.textContent = "You have selected: ";
    humanChoice.textContent = e.target.textContent;
    humanText.appendChild(humanChoice);

    playGame();
}


buttons.forEach(button => {
    button.addEventListener("click", getButtonTarget)
})


