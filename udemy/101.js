var secretNumber = 4


var age = prompt("what is your guess?")

if (Number(age) == secretNumber) {
	alert('You Got it right');
}
	else if (age < secretNumber) {
		alert('Guess higher');
	}

	
