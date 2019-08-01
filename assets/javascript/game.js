
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const compGuess = abc[Math.floor(Math.random() * abc.length) ];
console.log(compGuess);
console.log(abc.length);

document.onkeyup = function(event) {
    const userGuess = event.key;
    const compGuess = abc[Math.floor(Math.random() * abc.length) ];
    console.log(compGuess);
    console.log(userGuess);
}

const wins = 0;
const losses = 0;
const clicks = 0;

const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");
const clicksText = document.getElementById("clicks-text");
const userGuesses = document.getElementById("user-guesses")


winsText.textContent = ("Wins: " + wins);
lossesText.textContent = "Losses: " + losses;
clicksText.textContent = "Number of Guesses: " + clicks;
userGuesses.textContent = "You have guessed the following: " + userGuess;


