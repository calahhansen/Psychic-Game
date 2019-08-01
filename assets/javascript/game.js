
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const compGuess = abc[Math.floor(Math.random() * abc.length) ];
console.log(compGuess);
console.log(abc.length);

let wins = 0;
let losses = 0;
let clicks = 0;
let guesses = 0;

const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");
const clicksText = document.getElementById("clicks-text");
const userGuesses = document.getElementById("user-guesses")

document.onkeyup = function(event) {
    const userGuess = event.key;
    console.log(userGuess);
    if (clicks > 9) {
        if (userGuess === compGuess) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        } else if (userGuess !== compGuess) {
        clicks++;
        clicksText.textContent = "Number of Guesses: " + clicks;
        userGuesses.textContent = "You have guessed the following: " + userGuesses;
        } else {
            losses++;
            lossesText.textContent = "Losses: " + losses;
        }
    }
}










