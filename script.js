'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let lost = false;
let gameOver = false;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess || guess < 1 || guess > 20) {
		// Invalid input
		document.querySelector('.message').textContent = '⚠️ Valid Range: 1 - 20';
	} else if (guess === secretNumber) {
		// Player wins
		document.querySelector('.message').textContent = '🎉 Correct guess!';
		gameOver = true;
	} else {
		// Wrong guess
		if (score === 1) {
			lost = true;
			gameOver = true;
			score--;
		}

		if (lost) {
			document.querySelector('.message').textContent = '💀 Game over!';
		} else {
			const message = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
			document.querySelector('.message').textContent = message;
			score--;
		}

		document.querySelector('.score').textContent = score;
	}

	if (gameOver) {
		document.querySelector('body').style.backgroundColor = lost ? '#822d2a' : '#2a822a';
		document.querySelector('.number').style.width = '20rem';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.check').disabled = true;
		document.querySelector('.again').style.display = 'block';
	}
});

// Resets the game
document.querySelector('.again').addEventListener('click', function () {
	document.querySelector('.again').style.display = 'none';
	document.querySelector('.check').disabled = false;

	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	lost = false;
	gameOver = false;

	document.querySelector('.guess').value = '';
	document.querySelector('.message').textContent = 'Make a guess...';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = 20;
});

