const guessButton = document.querySelector(".guessButton");
const guessInput = document.querySelector(".guessInput");

let guesses = document.querySelector(".guesses");
let message = document.querySelector(".guessMessage");

let randomNum = Math.floor(Math.random() * 10) + 1;
let count = 3;
let resetButton;

guessButton.addEventListener("click", checkGuess);

function checkGuess() {
  let guess = Number(guessInput.value);
  let wrongGuess = !Number(guessInput.value);
  if (count == 1) {
    guesses.textContent = "";
  }
  guesses.textContent += guess + " ";

  if (guess === randomNum) {
    message.textContent = `Wow you did it! You guessed ${randomNum} right. But dont get hang up on that to much.`;
    setGameOver();
  } else if (count <= 1) {
    message.textContent = `WRONG! WRONG!! WRONG!!! HA! HA! HA! YOU ARE DEAD (X-X).\n Oh and for your information it was ${randomNum}`;
    document.body.style.backgroundImage = "url('images/joker_lostGame.png')";
    document.body.style.backgroundPosition = "bottom left";
    setGameOver();
  } else if (wrongGuess) {
    message.textContent = `What the hell do you think you doing?! I asked for a number!`;
  } else if (guess !== randomNum) {
    message.textContent = `Wrong!!! Try again! You have ${count -
      1} attempts left`;
  }

  count--;
  guessInput.value = "";
  guessInput.focus();
}

function setGameOver() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  resetButton = document.createElement("button");
  resetButton.setAttribute("id", "reset");
  resetButton.textContent = "Try Again.";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  location.reload();
}
//-------------OLD VERSION WITH ALERTS-------------
/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}


function guessingGame() {
  //Create a number to guess between 1 and 10
  let numberToGuess = getRandomInt(1, 10);
  let count = 1;

  //make your first guess
  let guess = parseInt(
    prompt("Guess a number between 1-10: (You have only 3 attempts)")
  );

  // As long as three guess is incorrect or you have to guess less than 3 times, try to guess again
  while (guess != numberToGuess && count < 3) {
    if (isNaN(guess)) {
      guess = parseInt(
        prompt("What the hell do you think you doing?! I asked for a number!")
      );
    } else {
      guess = parseInt(
        prompt(`Wrong!!! Try again! You have ${3 - count} attempts left`)
      );
      count++;
    }
  }

  if (guess == numberToGuess && count < 3) {
    console.log(
      `Wow you did it! You guessed ${numberToGuess} right. But dont get hang up on that to much.`
    );
  } else {
    console.log(
      `WRONG! WRONG!! WRONG!!! HA! HA! HA! YOU ARE DEAD (X-X). Oh and for your information it was ${numberToGuess}`
    );
  }
}

guessingGame();
*/
