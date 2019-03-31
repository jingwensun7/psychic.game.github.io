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
	document.querySelector("#guesses").innerHTML = "Guesses Left: 0";
	document.querySelector("#user").innerHTML = "Your Guesses so far: 9";
	guesses = 9;
	user = [];
}

document.onkeyup = function(event) {
	guesses--;
	var userGuesses = event.key.toLowerCase();
	user.push(userGuesses);
	countGuesses();
	userGuess();

	var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if (userGuesses === computerGuesses) {
		wins++;
		alert("You won!");
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		game();
	}
	else if (guesses === 0) {
		losses++;
		alert("You lose!");
		document.querySelector("#losses").innerHTML = "Loses: " + losses;
		game();
	}

};
