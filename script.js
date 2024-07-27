'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let lost = false;
let gameOver = false;

const displayMessage = (message) => (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// Invalid input
	if (!guess || guess < 1 || guess > 20) {
		displayMessage('⚠️ Valid Range: 1 - 20');
		// Player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct guess!');
		gameOver = true;

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
		// Wrong guess
	} else {
		if (score === 1) {
			lost = true;
			gameOver = true;
			score--;
		}

		if (lost) {
			displayMessage('💀 Game over!');
		} else {
			const message = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
			displayMessage(message);
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

	displayMessage('Make a guess...');
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = 20;
});

