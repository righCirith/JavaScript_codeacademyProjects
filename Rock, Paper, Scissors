const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, invalid input!')
    }
};


const getComputerChoice = function() {
    const number = Math.floor(Math.random() * 3)
    switch(number) {
        case 0:
            return 'rock'
            break;
        case 1: 
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
        default:
            return 'error in the code'
            break;
    }
};


const determineWinner = function(userChoice, computerChoice) {
    if(userChoice === 'bomb') {
        return 'User wins'
    }
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }
};

function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User choice is: ${userChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}


playGame();

