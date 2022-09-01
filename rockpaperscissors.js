const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error, choose between Rock, paper or scissors");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Its a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer Won";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations you won!";
    }
  }
};


console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame('paper')
