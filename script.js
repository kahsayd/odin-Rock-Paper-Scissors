// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}

function displayResult(outputResult) {
    resultsDiv.innerHTML = outputResult;
}

function displayScore() {
    scoreDiv.innerHTML = "Player: " + playerPoints + " & " + "Computer: " + computerPoints;
}

function getPoints(result) {
    if (playerPoints >= 5) {
        displayResult("Congratulations. You've won the game!");
        resetGame();
    }
    else if (computerPoints >= 5) {
        displayResult("Computer wins. You've lost the game!");
        resetGame();
    }
    else {
        displayResult(result);
    }
}


function playRound(playerSelection, computerSelection) {
    let computerSelect = computerSelection;
    let winResult = playerSelection + " beats " + computerSelect;
    let result = "";

    if (playerSelection === computerSelect) {
        result = "Draw: " + playerSelection + " & " + computerSelect
        playerPoints++;
    }
    else if (playerSelection === "Paper" && computerSelect === "Rock") {
        result = "You Win. " + winResult
        playerPoints++;
    }
    else if (playerSelection === "Scissors" && computerSelect === "Paper") {
        result = "You Win. " + winResult
        playerPoints++;
    }
    else if (playerSelection === "Rock" && computerSelect === "Scissors") {
        result = "You Win. " + winResult
        playerPoints++;
    }
    else {
        result = "You Lose. " + playerSelection + " does not beat " + computerSelect
        computerPoints++;
    }
    
    displayScore();

    getPoints(result);

    return result;
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    displayScore();
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        const result = playRound(button.value, getComputerChoice());
    });
});
