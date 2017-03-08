var options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_'];
var wins = 0;
var losses = 0;
var Guesses = 0;
var GuessesLeft = 9;

document.onkeyup = function(event) {
    wins.textContent = event.key;


    var userGuess = event.key;

    var computerGuess = options[Math.floor(Math.random() * options.length)];

    alert(computerGuess);
    if (userGuess === computerGuess) {
        ties = ties + 1;
        console.log(ties);
    } else if (userGuess === "r" && computerGuess === "s" || userGuess === "p" && computerGuess === "r" || userGuess === "s" && computerGuess === "p") {
        wins = wins + 1;
        console.log(wins);
    }

    if (userGuess === "r" && computerGuess === "p" || userGuess === "p" && computerGuess === "s" || userGuess === "s" && computerGuess === "r") {
        losses = losses + 1;
        console.log(losses);
    }




};