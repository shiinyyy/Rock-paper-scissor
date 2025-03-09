console.log('Welcome to the game, please define your selection.');

//Get user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
  return userInput;
} else {
  console.log("There's an error in your selection");
  }
}
//Get Computer's choice
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3); 
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
     return "scissors";
    default:
      console.log("I'm waiting.");
  }
}
//Compare the choices and determine winner
let determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "It's a tie!";
  } else if(userChoice === "rock") {
      if(computerChoice === "paper") {
        return "You lose!";
      } else {
        return "You win!";
      }
  } else if(userChoice === "paper") {
      if(computerChoice === "rock") {
        return "You win!";
      } else {
        return "You lose!";
      }
  } else if(userChoice === "scissors") {
    if(computerChoice === "rock") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
}
//Gameplay interface
function playGame(userInput) {
const userChoice = getUserChoice(userInput);
const computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(`User's choice: ${userChoice}`);
console.log(`Computer's choice: ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
}
//Start the program and display the results

playGame("rock");