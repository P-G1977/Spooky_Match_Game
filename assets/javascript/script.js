/**
 * Event listener when the DOM content is fully loaded.
 * This will hide the modal once the document is ready.
 */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-modal");
  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

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
let firstCardValue, secondCardValue;

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


let seconds = 0,
  minutes = 0;

let movesCount = 0,
  winCount = 0;

/**
 * Function that updates and shows the time in MM:SS.
 * It increments seconds every time it's called and will update the display.
 */
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

/**
 * Function to count the number of moves made by the player.
 * It increments the move count and updates the moves display.
 */
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

/**
 * Function to randomly select card items from the items array.
 * It creates pairs of cards for the game board, making sure no duplicate pairs.
 *
 * @param {number} size - The size of the game board (default is 4, resulting in a 4x4 grid).
 * @returns {Array} - The array of randomly selected card items.
 */
const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

/**
 * Function to generate the game board matrix.
 * Arranges card items randomly in a grid layout.
 *
 * @param {Array} cardValues - Array of selected card values.
 * @param {number} size - The size of the game grid (default is 4).
 */

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];

  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
      <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before"><img src="assets/images/coffin.png" class="image"></div>
        <div class="card-after">
          <img src="${cardValues[i].image}" class="image"/>
        </div>
      </div>
    `;
  }

  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (firstCard && secondCard) {
        return;
      }

      if (
        !card.classList.contains("matched") &&
        !card.classList.contains("flipped")
      ) {
        card.classList.add("flipped");

        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else if (!secondCard) {
          secondCard = card;
          secondCardValue = card.getAttribute("data-card-value");
          movesCounter();

          if (firstCardValue === secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = false;
            secondCard = false;
            winCount += 1;

            if (winCount === Math.floor(cardValues.length / 2)) {
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

            setTimeout(() => {
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
 * Resets the game state, sets up the timer, and initialises the game board.
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

/**
 * Function to stop or reset the game when the stop button is clicked.
 * It also shows the result depending on whether the game was won or lost.
 */
const stopGame = () => {
  if (!controls || !stopButton || !startButton || !result) return;

  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);

  if (!cards || cards.length === 0) return; 

  result.innerHTML = `<h2>${winCount < Math.floor(cards.length / 2) ? "You Lost" : "You Won!"}</h2>
                      <h4>Moves: ${movesCount}</h4>
                      <h4>Time: ${formatTime(seconds, minutes)}</h4>`;
};

if (stopButton) {
  stopButton.addEventListener("click", stopGame);
}


/**
 * Helper function to format the time in MM:SS format.
 *
 * @param {number} seconds - The number of seconds elapsed.
 * @param {number} minutes - The number of minutes elapsed.
 * @returns {string} - The formatted time string (MM:SS).
 */

const formatTime = (seconds, minutes) => {
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  return `${minutesValue}:${secondsValue}`;
};

/**
 * Initialises the game state, generates random cards, and starts the game.
 */
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};
