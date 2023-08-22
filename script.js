function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let computerSelect = computerSelection;
    let winResult = playerSelection + " beats " + computerSelect;
    if (playerSelection === computerSelect) {
        return "Draw " + playerSelection + " " + computerSelect + " stalemate"
    }
    else if (playerSelection === "Paper" && computerSelect === "Rock") {
        return "You Win. " + winResult
    }
    else if (playerSelection === "Scissors" && computerSelect === "Paper") {
        return "You Win. " + winResult
    }
    else if (playerSelection === "Rock" && computerSelect === "Scissors") {
        return "You Win. " + winResult
    }
    else {
        return "You Lose. " + playerSelection + " does not beat " + computerSelect
    }
}

console.log(playRound("Rock", getComputerChoice()))