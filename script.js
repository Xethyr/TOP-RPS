function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return 'rock';
    }
    else if (number === 1) {
        return 'paper';
    } 
    else if (number === 2) {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Rock, paper, or scissors?', 'rock')
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        const winMessage = `You win! ${humanChoice} beats ${computerChoice}`;

        if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
        }

        if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                console.log(loseMessage);
                computerScore++
         }
            if (computerChoice === 'scissors') {
                console.log(winMessage);
                humanScore++;
            }
        }
        if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                console.log(loseMessage);
                computerScore++
            }
            if (computerChoice === 'rock') {
                console.log(winMessage);
                humanScore++;
            }
        }
        if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                console.log(loseMessage);
                computerScore++
            }
            if (computerChoice === 'paper') {
                console.log(winMessage);
                humanScore++;
            }
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}
playGame();