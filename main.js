let playerScore = 0;
let computerScore = 0;
let computerChoice = "";

function play() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        computerChoice = "Rock";
    } else if (value === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(playerSelection) {
    computerChoice = play();
    let resultMessage = '';

    if (computerChoice === playerSelection) {
        resultMessage = `Computer chose ${computerChoice}, so it's a tie!`;
    } else if (
        (playerSelection === 'Rock' && computerChoice === 'Scissors') ||
        (playerSelection === 'Paper' && computerChoice === 'Rock') ||
        (playerSelection === 'Scissors' && computerChoice === 'Paper')
    ) {
        resultMessage = `Computer chose ${computerChoice}, so you won!`;
        playerScore++;
    } else {
        resultMessage = `Computer chose ${computerChoice}, so you lost!`;
        computerScore++;
    }

    document.getElementById('result').innerText = resultMessage + '\n'+ '\n' +  ` Your score: ${playerScore}, Computer score: ${computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = 'Scores reset!';
}