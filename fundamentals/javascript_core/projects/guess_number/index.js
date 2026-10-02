let randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.getElementById("guessField");
let submit = document.getElementById("subt");
let userGuesses = document.querySelector(".guesses");
let reaminingGuesses = document.querySelector(".remainingGuess");
let lowOrHigh = document.querySelector(".lowOrHi");
let result = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a valid number greater then 1.");
  } else if (guess > 100) {
    alert("Please enter a valid number less then 100.");
  } else {
    prevGuesses.push(guess);

    if (numGuess == 10) {
      displayGuess();
      displayMessage(`Game End. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess();
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right. Random number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Guessed number is to low!");
  } else if (guess > randomNumber) {
    displayMessage("Guessed number is to high!");
  }
}

function displayGuess() {
  userInput.value = "";
  userGuesses.innerText = prevGuesses;
  numGuess++;
  reaminingGuesses.innerText = 11 - numGuess;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    userInput.removeAttribute("disabled");
    userGuesses.innerText = prevGuesses;
    reaminingGuesses.innerText = 11 - numGuess;
    result.removeChild(p);
    playGame = true;
  });
}
