const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
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

// Pick random objects from items array
const generateRandom = (size = 4) => {
  // temp array
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  // Random object select
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  // shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    // create the cards
    gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
          <div class="card-before"><img src="assets/images/coffin.png" class="image"></div>
          <div class="card-after">
            <img src="${cardValues[i].image}" class="image"/>
          </div>
        </div>
      `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  // Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          movesCounter();
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = false;
            winCount += 1;
            if (winCount == Math.floor(cardValues.length / 2)) {
              let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
              let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
              let totalTime = `${minutesValue}:${secondsValue}`;
              result.innerHTML = `<h2>You Won!</h2>
                                  <h4>Moves: ${movesCount}</h4>
                                  <h4>Time: ${totalTime}</h4>`;
              stopGame();
            }
          } else {
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

/**
 * Starts the game when the start button is clicked.
 * This function initializes the game, resets all counters, and starts the timer.
 */
startButton.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  timeValue.innerHTML = `<span>Time:</span> 00:00`;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  initializer();
});

//Stop game
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);
//Initialise values and func calls
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};