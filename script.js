function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}
console.log(getComputerChoice());

