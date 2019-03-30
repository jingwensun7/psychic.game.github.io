var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var losses = 0;
var guesses = 9;
var user = [];

var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuesses () {
	document.querySelector("#guesses").innerHTML = "Guesses Left: " + guesses;
}

function userGuess() {
	document.querySelector("#user").innerHTML = "Your Guesses so far: " + user.join(", ");
}

function game() {
	guesses = 9;
	user = [];
	var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {
	guesses--;
	var userGuesses = event.key.toLowerCase();
	user.push(userGuesses);
	countGuesses();
	userGuess();

	if (userGuesses === computerGuesses) {
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		game();
	}
	else if (guesses === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Loses: " + losses;
		game();
	}

};
