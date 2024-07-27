'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let lost = false;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess || guess < 1 || guess > 20) {
		// Invalid input
		document.querySelector('.message').textContent = '⚠️ Valid Range: 1 - 20';
	} else if (guess === secretNumber) {
		// Player wins
		document.querySelector('.message').textContent = '🎉 Correct guess!';
		document.querySelector('body').style.backgroundColor = '#2a822a';
		document.querySelector('.number').style.width = '20rem';
		document.querySelector('.number').textContent = secretNumber;
	} else {
		// Wrong guess
		if (score === 0) lost = true;

		if (lost) document.querySelector('.message').textContent = '💥 You lost the game!';
		else {
			const message = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
			document.querySelector('.message').textContent = message;
			score--;
		}

		document.querySelector('.score').textContent = score;
	}
});

