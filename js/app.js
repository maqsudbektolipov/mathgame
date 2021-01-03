'use strict';
let score = 50;
let random4, num1, num2, result;

const num1El = document.querySelector('.num1');
const num2El = document.querySelector('.num2');
const resultEl = document.querySelector('.result');
const scoreEl = document.querySelector('.scoreValue');
const btn = document.querySelectorAll('.btn');

const reset = function () {
  num1 = Math.trunc(Math.random() * 9) + 1;
  num2 = Math.trunc(Math.random() * 9) + 1;
  random4 = Math.trunc(Math.random() * 4);

  const randomHundred = function () {
    return Math.trunc(Math.random() * 99) + 1;
  };

  num1El.textContent = num1;
  num2El.textContent = num2;
  result = num1 * num2;
  btn[random4].textContent = result;

  for (let i = 0; i < 4; i++) {
    if (i !== random4) {
      btn[i].textContent = randomHundred();
    }
  }
};

reset();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    if (score <= 0) {
      alert('You lose the game');
      random4 = random4 === i ? (score = 90) : (score = 105);
    } else if (score >= 200) {
      alert('Congratulations! YOU WON THE GAME! 🎉');
      reset();
      score = score === i ? (score = 50) : (score = 65);
    }

    if (random4 === i) {
      score += 10;
      scoreEl.textContent = score;
      reset();
    } else {
      score -= 5;
      scoreEl.textContent = score;
    }
  });
}
