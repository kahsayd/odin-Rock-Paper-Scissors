// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    let computerSelect = computerSelection;
    let winResult = playerSelection + " beats " + computerSelect;
    let result = "";
    if (playerSelection === computerSelect) {
        result = "Draw " + playerSelection + " " + computerSelect + " stalemate"
    }
    else if (playerSelection === "Paper" && computerSelect === "Rock") {
        result = "You Win. " + winResult
    }
    else if (playerSelection === "Scissors" && computerSelect === "Paper") {
        result = "You Win. " + winResult
    }
    else if (playerSelection === "Rock" && computerSelect === "Scissors") {
        result = "You Win. " + winResult
    }
    else {
        result = "You Lose. " + playerSelection + " does not beat " + computerSelect
    }
    return result;
}

// buttons is a node list. It looks and acts much like an array.

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        const result = playRound(button.value, getComputerChoice());
        displayResult(result);
    });
});

function displayResult(result) {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result;
    resultsDiv.appendChild(resultParagraph);
}
