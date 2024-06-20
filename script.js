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

    

    function playRound(humanChoice, computerChoice) {
        const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        const winMessage = `You win! ${humanChoice} beats ${computerChoice}`;

        if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
        }

        if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScore++;
                console.log(loseMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
         }
            if (computerChoice === 'scissors') {
                humanScore++;
                console.log(winMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
            }
        }
        if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                computerScore++;
                console.log(loseMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
            }
            if (computerChoice === 'rock') {
                humanScore++;
                console.log(winMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
            }
        }
        if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                console.log(loseMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
            }
            if (computerChoice === 'paper') {
                humanScore++;
                console.log(winMessage, `Scores: You: ${humanScore}, Computer: ${computerScore}`);
            }
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log('The winner is the human!');
    } else if (computerScore > humanScore) {
        console.log('The winner is the computer!');
    } else if (humanScore === computerScore) {
        console.log('The winner is no one!')
    }
}
playGame();