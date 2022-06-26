'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.body;

const displayMessage = function (selector, message) {
  document.querySelector(selector).textContent = message;
};

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randomNumber();
let scoreNumber = 20;
let highscoreNumber = 0;

btnCheck.addEventListener('click', function () {
  const guessNumber = Number(guess.value);

  if (!guessNumber) {
    displayMessage('No number!');
  } else if (guessNumber === secretNumber) {
    displayMessage('.message', 'Correct Number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscore.textContent = highscoreNumber;
    }
  } else {
    if (scoreNumber > 1) {
      displayMessage('.message', guessNumber > secretNumber ? 'Too high!' : 'Too low!');
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      displayMessage('.message', 'You lost the game!');
      score.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = randomNumber();
  scoreNumber = 20;

  displayMessage('.message', 'Start guessing...');
  score.textContent = scoreNumber;
  number.textContent = '?';
  guess.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
