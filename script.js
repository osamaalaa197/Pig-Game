'use strict';
// buttom
const btmNemGame = document.querySelector('.btn--new');
const btmRoll = document.querySelector('.btn--roll');
const btmhold = document.querySelector('.btn--hold');
// score
const scoreplayer1 = document.querySelector('#score--0');
const scoreplayer2 = document.querySelector('#score--1');
//currentt score
const currentscore0 = document.querySelector('#current--0');
const currentscore1 = document.querySelector('#current--1');

// currenttplayer
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

player0.classList.remove('.player--active');

const diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');
let playing = true;
const score = [0, 0];
let currentscore = 0;
let activeplayer = 0;

function startGame() {
  scoreplayer1.textContent = 0;
  scoreplayer2.textContent = 0;
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  playing = true;
  document.querySelector(`.player--0`).classList.add('player--active');
  currentscore = 0;
  activeplayer = 0;
}
startGame();

function switcher() {
  if (activeplayer === 0) {
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = 1;
    currentscore = 0;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = 0;
    currentscore = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
}

btmNemGame.addEventListener('click', startGame);
btmRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + dice + '.png';
    if (dice === 1) {
      switcher();
    } else {
      currentscore += dice;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    }
  }
});

btmhold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switcher();
    }
  }
});
