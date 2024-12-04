'use strict';
// Slected element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const scores = [0, 0];
let playing = true;

// Function to switching player
const switchPlayer = function () {
  document.getElementById(`current--${acticePlayer}`).textContent = 0;
  currentSrc = 0;
  acticePlayer = acticePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll dice functionality

let currentSrc = 0;
let acticePlayer = 0;

diceRollBtn.addEventListener('click', function () {
  // 1. Generating a random number
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add current score
      currentSrc += dice;
      document.getElementById(`current--${acticePlayer}`).textContent =
        currentSrc; // adding current score to the current active player
    } else {
      // Switch to another player
      switchPlayer();
    }
  }
});

// holding current score functionality

holdBtn.addEventListener('click', function () {
  // 1. Add current score to the active player
  if (playing) {
    scores[acticePlayer] += currentSrc; // scores[1] =score[1]+currentSrc
    document.getElementById(`score--${acticePlayer}`).textContent =
      scores[acticePlayer];
    // 2. Check if player's score
    if (scores[acticePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${acticePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${acticePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
