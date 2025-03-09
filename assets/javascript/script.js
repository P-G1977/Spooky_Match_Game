const moves = document.getElementById("moves-counter");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector("game-container");
const result = document.getElementById("results");
const controls = document.querySelector("controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

// items array
const items = [
  { name: "bat", image: "assets/images/bat.png" },
  { name: "black-cat", image: "assets/images/black-cat.png" },
  { name: "cauldron", image: "assets/images/cauldron.png" },
  { name: "blood", image: "assets/images/blood.png" },
  { name: "death", image: "assets/images/death.png" },
  { name: "frankenstein", image: "assets/images/frankenstein.png" },
  { name: "potion", image: "assets/images/potion.png" },
  { name: "trident", image: "assets/images/trident.png" },
  { name: "witch", image: "assets/images/witch.png" },
  { name: "dracula", image: "assets/images/dracula.png" },
  { name: "zombie", image: "assets/images/zombie.png" },
  { name: "grave", image: "assets/images/grave.png" },
];

// Time
let seconds = 0,
  minutes = 0;
// Moves and win count
let movesCount = 0,
  winCount = 0;

// timer
const timeGenerator = () => {
  seconds += 1;

  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

// calculate moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
  };