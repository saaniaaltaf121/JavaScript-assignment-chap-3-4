let shopping_list = ["Milk", "Bread", "Apple"];
console.log(shopping_list);
Array = ["Milk", "Bread", "Apple"];
Array.splice(2 ,"Banana");
console.log(Array)



// // EXERCISE:3.2
// emptyArray = [];
// Array1 = ["Milk", "Bread", "Apple"];
// Array1.splice(2, "Egg");
// console.log(Array1)

// Exerise 3.3
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays)
// exercise 3.4

const myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    forSale: true
  };
  
 
  const propertyName = "color";
  
 
  myCar[propertyName] = "Red";
  
  
  const newPropertyName = "forSale";
  
  
  myCar[newPropertyName] = false;
  
  
  console.log("Make: " + myCar.make);
  console.log("Model: " + myCar.model);
  
 
  console.log("forSale: " + myCar.forSale);
  
// EXERCISE:3.5
const people = {
    friends: []
  };
  
  
  const friend1 = {
    firstName: "Sara",
    lastName: "Iqbal",
    ID: 1
  };
  
  const friend2 = {
    firstName: "Sehrish",
    lastName: "Altaf",
    ID: 2
  };
  
  const friend3 = {
    firstName: "fatima",
    lastName: "Hassan",
    ID: 3
  };
  
  
 people.friends.push(friend1, friend2, friend3); 
  
  console.log(people);

//   Exercise:4.1
let age = 30;
if (age>35) {
    console.log("You are allowed")
}
else {
    console.log("your age is less")
}
// EXERCISE:4.2


const userAgeInput = prompt("Please enter your age:");

const userAge = parseInt(userAgeInput);


let message;


if (userAge >= 21) {
  message = "You are allowed entry ";
} 

else if (userAge >= 19) {
  message = "You are not allowed entry";
}

else {
  message = "Sorry, you are denied entry.";
}

console.log(message);

// exercise:4.3


const isValidID = true; 


constmessage = isValidID
  ? "You are allowed entry to the venue."
  : "You are denied entry to the venue.";


console.log(message);

// Exercise:4.4

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// Exercise:4.5

const prizeInput = prompt("Select a number between 0 and 10 for a chance to win a prize:");


const selectedNumber = parseInt(prizeInput);

letmessage = "My Selection: ";


switch (selectedNumber) {
  case 0:
    message += "You win a car!";
    break;
  case 1:
    message += "You win a vacation!";
    break;
  case 2:
  case 3:
  case 4:
    message += "You win a gift card!";
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    message += "You win a T-shirt!";
    break;
 
  default:
    message += "Sorry, no prize for that selection.";
}
alert(message);


// Rock Paper Scissors game

const choices = ["Rock", "Paper", "Scissors"];


const playerSelectionIndex = Math.floor(Math.random() * 3); 
const computerSelectionIndex = Math.floor(Math.random() * 3);


let resultMessage = "";


if (playerSelectionIndex === computerSelectionIndex) {
  resultMessage = "It's a tie!";
} else {
 
  const playerChoice = choices[playerSelectionIndex];
  const computerChoice = choices[computerSelectionIndex];

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultMessage = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
  }
}


console.log(`Player: ${choices[playerSelectionIndex]}`);
console.log(`Computer: ${choices[computerSelectionIndex]}`);
console.log(resultMessage);








