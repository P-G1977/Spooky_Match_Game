# The Spook Match Game - Milestone Two

[View live project here.](https://p-g1977.github.io/Spooky_Match_Game/)

The Spook Match Game is a thrilling Halloween-themed memory challenge designed to test your wits and speed! Dive into a spooky world filled with eerie icons like bats, cauldrons, and zombies as you attempt to uncover and match pairs of cards. The goal is simple: find all the matching pairs in as few moves and as little time as possible. With an immersive atmosphere, complete with haunting background music and eerie visuals, this game will keep you entertained while sharpening your memory skills.

As you play, every move counts! Each match you find brings you closer to victory, but the challenge lies in remembering where each card is hidden. The game keeps track of your time and number of moves, pushing you to improve your performance with every round. Whether you're playing casually for fun or competing to beat your best time, Spook Match Game offers a perfect balance of excitement and brain-teasing fun. The randomly shuffled cards ensure that every game is a unique experience, keeping you on your toes with each new attempt.

![alt text](assets/docs/pages/full-spook.png "Full images across devices")

## Project Explanation

Spook Match is a fun, Halloween-themed memory card game designed to entertain users while testing their memory and concentration skills through matching spooky character pairs within a timed challenge.

### Client Goals

This project was developed as part of my Diploma in Web Application Development, serving as a practical milestone in building interactive, JavaScript-driven web applications. While there was no real-life client, I approached Spook Match as a professional-grade product, focusing on clean structure, user engagement, and alignment with potential client expectations.

* Delivering an interactive memory-matching game that challenges users’ focus, pattern recognition, and memory skills.

* Offering a playful, spooky-themed game suitable for seasonal promotions or casual gaming platforms.

* Encouraging repeated playthroughs through simple mechanics, time tracking, and a scoring system that motivates improvement.

* Adding value to a potential client’s web content with a fun, themed browser game that enhances user engagement and time on site.

* Ensuring accessibility with a fully browser-based, lightweight game that works across desktop and mobile devices.

* Providing a friendly, visually engaging interface that reflects strong frontend design and coding principles.

### User Goals

The target audience for Spook Match includes casual gamers of all ages who enjoy themed memory challenges and lighthearted fun.

  * Test their memory and focus by matching spooky card pairs under time pressure.

  * Enjoy a festive, Halloween-inspired design that adds charm to each game session.

  * Dive into gameplay that's simple to understand, yet rewarding to master.

  * Challenge themselves to beat previous scores with fewer moves and faster times.

  * Play instantly in the browser with no downloads or installations required.

  * Relax and have fun during quick breaks, seasonal events, or casual game nights.

## User Stories

Spook Match is designed as a light, casual memory game that draws players in with its spooky theme, simple gameplay, and quick rounds. It’s ideal for users looking to unwind, pass time, or enjoy a short challenge—whether as part of a larger entertainment platform or a standalone experience.

* User

  * I want to play a fun and spooky memory game that’s easy to understand.

  * I want to challenge my memory and concentration in a casual, low-pressure setting.

  * I want a game that’s quick to load and works right in the browser without needing to install anything.

  * I want to enjoy short, engaging sessions that I can play during breaks or downtime.

  * I want the game to have intuitive controls and a responsive interface.

  * I want a smooth experience without bugs or slowdowns, even on mobile.

  * I want to improve my performance over time by trying to match cards faster and with fewer moves.

  * I want a game that’s visually appealing and keeps me coming back for another round.

  * I want to be able to toggle the background music on or off depending on my environment or preference.


## Design

* Color Scheme

| Main Colors  | Typorgraphy  |
| ------------ |:------------ |
| Black        | White        |
| White        |              |
| #f30808      |              |
| #880808      |              |

* Typography

![alt text](assets/docs/fonts/main-font.png "Metal Mania Font")

Metal Mania font by [Google Fonts](https://fonts.google.com/?query=metal+mania) was used for most of the text on the game. The fallback "sans-serif" font was used on the Music On/Off button, the timer and moves count. The Metal Mania font looked relevant for this halloween themed game.

* imagery

  * The main game design is based around Halloween themed imagery. The background image is a graveyard and the cards for the game are all Halloween / Horror related.

  ![alt text](assets/docs/pages/game-with-cards.png "Full images across devices")



## Features

* The Modal

  * Introduction & Instructions: The modal welcomes players to The Spook Match Game and provides a brief introduction to the game, setting the spooky atmosphere.

  * How to Play: It outlines the game mechanics in a simple bullet-point list, explaining how to flip cards, match pairs, and complete the game as quickly as possible.

  * User Interaction: The modal includes a button labeled "I Understand!" that allows players to close the modal and start the game, ensuring they have read the instructions before playing.

    ![alt text](assets/docs/pages/game-modal.png "Game modal showing instructions and rules")

* The Start Button

  * Game Initialization: After clicking the "I Understand" button on the Modal. The Start The Spook button starts the game, starting the time, moves-count, and a new set of shuffled cards.

    ![alt text](assets/docs/pages/start-spook.png "Game start button")

* The Full Game

  * Spooky Memory Challenge: The Spook Match Game is a Halloween-themed memory game where players flip cards to find matching spooky pairs, testing their memory and concentration.

  * Timed & Move-Based Gameplay: Players must match all pairs as quickly as possible while keeping their move count low, adding a competitive and strategic element to the game.

  * Immersive Experience: With eerie background music, creepy visuals, and a suspenseful atmosphere, the game creates a fun and engaging spooky adventure for players of all ages.

    ![alt text](assets/docs/pages/game-full.png "The Full Game")
  
  * Endless Replayability: Each game is different thanks to the random card shuffle, encouraging players to keep improving their speed and memory skills with every round.

* Stop The Spook Button

  * Game Reset & Results Display: Pressing the Stop The Spook button ends the game, stops the timer, pauses the background music, and displays the player's final move count and time, allowing them to see their performance.

    ![alt text](assets/docs/pages/stop-spook.png "The stop button")

* Losing Results

  * "You Lost" Message: If the player stops the game before matching all pairs, the results screen displays a "You Lost" message, indicating that the challenge was not completed.

  * Performance Summary: The screen shows the total number of moves and the elapsed time, allowing the player to reflect on their attempt and try again for a better result.

    ![alt text](assets/docs/pages/game-lost.png "The losing screen")

* Winning Results

  * "You Won!" Celebration: The winning screen displays a "You Won!" message, congratulating the player for successfully matching all the spooky pairs.

  * Final Stats Display: The screen shows the player's total number of moves and the time taken to complete the game, encouraging them to beat their own record in future rounds.

  * Game Reset Prompt: After winning, the player can restart the game to try again with a new shuffled set of cards, keeping the challenge fresh and engaging.

    ![alt text](assets/docs/pages/game-won.png "The losing screen")

  * Challenge Yourself: Try to beat the game even faster next time by improving your memory and matching all pairs in fewer moves and a shorter time!

* Music On / Off Choice

  * Music Toggle Feature: Players can turn the spooky background music on or off at any time using the Music: ON/OFF button for a customized gaming experience.

    ![alt text](assets/docs/pages/music-on-off.png "Music on/off toggle")

* 404 Error Page

  * Error page: If a player accidentally navigates to an incorrect page, the 404 error page will show which has a link to redirect the player to the home page.

    ![alt text](assets/docs/pages/404.png "404 Error Page")

### Features Left To Implement

* I would like to have an option to play with more or less cards to increase / decrease difficulty. And have the ability to play against the timer to add an extra layer of challenge.

## Testing

### JavaScript Full Functionality Explanation for Spook Match

<details>
<summary>Click to expand details</summary>

### DOM Content Loaded – Welcome Modal

Triggers once the HTML content is fully loaded

  * Hides the welcome modal when the "I Understand" button is clicked.

  ```js
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcome-modal");
    const closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
```
### Music Control and Toggle

Toggles game music on and off with a button

* Audio is hidden until the game starts

* Clicking toggles between playing and pausing the music

 ```js
 document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("game-audio");
  const audioToggleButton = document.getElementById("audio-toggle");
  let isAudioPlaying = true;

  audioToggleButton.style.display = "none";

  audioToggleButton.addEventListener("click", () => {
    if (isAudioPlaying) {
      audio.pause();
      audioToggleButton.innerText = "Music: OFF";
    } else {
      audio.play();
      audioToggleButton.innerText = "Music: ON";
    }
    isAudioPlaying = !isAudioPlaying;
  });

  audio.volume = 0.2;

  startButton.addEventListener("click", () => {
    audioToggleButton.style.display = "block";
    audio.play();  
    audioToggleButton.innerText = "Music: ON"; 
    isAudioPlaying = true; 
  });

  stopButton.addEventListener("click", () => {
    audioToggleButton.style.display = "none";
    audio.pause(); 
  });
});
```
### Game Items

Array of spooky card objects

* Each object contains a name and image URL

```js
const items = [
  { name: "bat", image: "assets/images/bat.png" },
  { name: "black-cat", image: "assets/images/black-cat.png" },
  // ... other spooky items
];
```
### Time Generator

Tracks and displays time in MM:SS format

```js
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
```
### Move Counter

Increases move count and updates the display every pair flip attempt

```js
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};
```
### Random Card Generator

Randomly selects half the amount of card pairs based on board size

```js
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
```
### Matrix Generator

Creates the game board and handles card click logic

```js
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
      if (firstCard && secondCard) return;

      if (!card.classList.contains("matched") && !card.classList.contains("flipped")) {
        card.classList.add("flipped");

        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          secondCard = card;
          secondCardValue = card.getAttribute("data-card-value");
          movesCounter();

          if (firstCardValue === secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = secondCard = false;
            winCount++;

            if (winCount === Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>You Won!</h2>
                                  <h4>Moves: ${movesCount}</h4>
                                  <h4>Time: ${formatTime(seconds, minutes)}</h4>`;
              stopGame();
            }
          } else {
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = secondCard = false;

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
```
### Stop Game

Stops timer, pauses music, and shows result

```js
const stopGame = () => {
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);

  audio.pause();
  audio.currentTime = 0;

  result.innerHTML = `<h2>${
    winCount < Math.floor(cards.length / 2) ? "You Lost" : "You Won!"
  }</h2>
    <h4>Moves: ${movesCount}</h4>
    <h4>Time: ${formatTime(seconds, minutes)}</h4>`;
};
```
### Game Start Logic

Resets game values and begins timer

```js
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

  audio.play();
  audio.volume = 0.2;
});
```
### Game Reset

Stops the game when stop button is clicked

```js
if (stopButton) {
  stopButton.addEventListener("click", () => {
    stopGame();
    audio.pause();
    audio.currentTime = 0;
  });
}
```
### Initialiser

Clears previous results and sets up new game

```js
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);
};
```
</details>

---

### Manual Testing

<details>
<summary>Click to expand details</summary>
</details>

---

* Accessibiliy

  * I ran the page through Lighthouse and the performance score result showed 96. I found out that if I removed the unused script kit for FontAwesome I may get better performance results. After removing the script I scored 100 across the 5 categories.

    ![alt text](assets/docs/testing/lighthouse.png "Lighthouse testing results")


* Chrome, Safari and Firefox browsers have been tested and they all work with the game.

* I have tested the game on Iphone 12, Iphone SE, Samsung Galaxy Flip 2 and Samsung Galaxy S24.

* I have made sure the colors contrast well together to keep the elements easily identifiable and readable.

* HTML

  * I ran the code through [W3C HTML validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fp-g1977.github.io%2FSpooky_Match_Game%2F) and there were no errors or warnings.

    ![alt text](assets/docs/testing/nuhtmladdcheck.png "html check results")

* CSS

  * I ran the code through [W3C CSS validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fp-g1977.github.io%2FSpooky_Match_Game%2F#textarea) and there were also no errors or warnings.

    ![alt text](assets/docs/testing/w3ccssval.png "css check results")

* JavaScript

  * I ran the code through [JS Hint](https://jshint.com/) and discovered 83 warnings with 'Two undefined variables'. I had not declared the 2 variables firstCardValue and secondCardValue. I declared the 2 variables and fixed the problem. However the 83 warnings I was not able to fix as far as I know. No errors. 

    ![alt text](assets/docs/testing/jshint.png "JavaScript testing results")

* Feature Testing

  * The Modal will show the game rules when the screen first loads, the game start button will show when the "I Understand" button is clicked.

  * The "Start The Spook" button will stat the game when clicked.

  * I tested that only two cards can be uncovered at a time and they reset when the next card is flipped.

  * The moves count moves incremental by one every time two cards are flipped.

  * The timer starts when the game starts and will not cut off until the game is finished or if the game is stopped by pressing "Stop The Spook".

  * When the game is won the winning screen shows the correct moves and time.

  * When the game is stopped the losing screen shows the correct moves and time.

  * The music on / off button stops and restarts the music when clicked.

  * All features have been tested on Desktop, Tablet, and Mobile devices.

## Bugs (Problems / Fixes)

* When designing the basic version of the game I had a meeting with my Mentor who pointed out that the card flipping code could be broken by continually flipping the cards, because there was no restriction on clicking additional cards while two were already flipped, which could lead to unintended behavior. Upon further research on [StackOverflow](https://stackoverflow.com/questions/33498769/why-does-javascript-operator-return-the-second-expression) and [Reddit](https://www.reddit.com/r/learnprogramming/comments/qcc927/when_does_returns_the_first_falsy_value_and_when/) I added  ```if (firstCard && secondCard) return; ``` at the beginning of the click event. This ensures that once two cards are flipped, no further cards can be clicked until the current pair is either matched or flipped back.

* Upon further development of the game I decided it would create a more unsettling environment to add music to the game. I talked about this to my Mentor who let me know that if I were to add music, I would need to add something to the game to turn the music off. I first added the music with the HTML ```<Audio loop controls>``` element. Unfortunately this revealed large, rather ugly audio default play, pause, and volume controls. I removed the "controls" from the ```<Audio>``` element and designed a ```<button>``` in HTML and styled ```.audio-toggle``` in CSS. Then after reading an article from [freeCodeCamp](https://forum.freecodecamp.org/t/power-on-off-button-to-control-audio/459693) created the JavaScript code using the ```audio``` variable. The ```id="audio-toggle"``` is used to toggle the music on and off, and the JavaScript logic listens for click and either plays or pauses the audio. I set the ```audio.volume = 0.2;```, as this sounded the best across the devices tested.
At first I incorrctly placed the ```<button>``` outside of the game ```.wrapper``` and the audio on / off button was at the corner of the screen. After loading the game on my mobile i discovered the button was hidden underneath the game and I was unable to toggle the audio. After moving the HTML ```<button>``` inside the ```.game-container``` and placing correctly with CSS, the music on/off button was nicely placed in the game below the game title.

* The last bug was simple to solve. I had to click the music on / off button twice to turn the music off, but after that it would click on / off without error. After looking at the game on DevTools and then looking at the JavaScript I realised I had incorrectly set the ```let isAudioPlaying = false;``` instead of ```let isAudioPlaying = true;```. This bug was then fixed and the music plays and toggles on / off without clicking twice.

### Unfixed Bugs

* There are no unfixed bugs

## Technologies Used

### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5) 

* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3)

* [JavaScript (ES6+)](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) 

    * Boostrap was used to assist with the responsiveness and styling of the project.

2. [Google Fonts](https://fonts.google.com/) 

    * Google fonts were used to import the "Metal Mania" font into the style.css file which is used on all the pages throughout the project.

3. [Visual Studio Code](https://code.visualstudio.com/) 

    * Visual Studio Code was the source code editor, designed for writing and editing code efficiently.

4. [GIT](https://git-scm.com/)

    * Git was used for the version control by utilizing the Visual Studio Code terminal to commit to Git and Push to GitHub.

5. [GitHub](https://github.com/)

    * GitHub is used to store the projects code after being pushed to GitHub.

6. [Favicon](https://favicon.io/favicon-generator/)

    * [Favicon generator](https://favicon.io/favicon-generator/) was used to create the Favicon for the website.

7. [Balsamiq](https://balsamiq.com/)

    * Balsamiq was used to create the wireframes during the design process.


## Deployment

### Version Control

* This site was created using Visual Studio Code editor and pushed to Github to the remote repository 'Spooky_Match_Game'.
* Git commands were used throughout the development to push the code to the remote repository. The following Git commands were used.
    * git add . | To add the files to the staging area before being commited.
    * git commit -m "commit message" | To commit changes to the local repository queue.
    * git push | To push all commited code to the remote repository on Github

### Deployment to Github

* I deployed this site to Github as follows.
    * In the Github repository navigate to the Settings tab.
    * At the source section drop-down menu, select the Master branch and save.
    * When the Master branch is selected, the page will provide a link to the website.
* The live link is: [The Spook Match Game](https://p-g1977.github.io/Spooky_Match_Game/)

### Forking the Github Repository

* Log into GitHub and locate [Spooky Match Game](https://github.com/P-G1977/Spooky_Match_Game).
* At the top of the repository (not top of page) just above the 'Settings' Button on the menu, locate the 'Fork' Button.
* You should now have a copy of the original repository in your GitHub account. However this WILL NOT affect the original repository but will just make a copy.

### Making a Local Clone

1. Log in to GitHub and locate [P-G1977/Spooky_Match_Game](https://github.com/P-G1977/Spooky_Match_Game).
2. Under the repository name, click 'Clone or download'.
    * To download the Zip file click the 'Download Zip' at the bottom of the dropdown menu.
3. To clone the repository using HTTPS, under 'Clone with HTTPS', copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.
  `$ git clone https://github.com/P-G1977/Spooky_Match_Game.git`
7. Press Enter. Your local clone will be created.

## Wireframes

  * The Wireframes were made with [Balsamiq](https://balsamiq.com/). They are simply made and they show the basic form of the game. The full game grid was a lot smaller than the original grid made with the wireframe, and the winning and losing screen text was first designed to be at the top of the start game button. The design changed over the development of the game. Please see below to access the folder of wireframes.

    [Full Range Of Wireframes here](assets/docs/wireframe/) 

## Credits

### Images

* All card images were used from [FLATICON](https://www.flaticon.com/packs/halloween-8#) and the designer of the Flaticon cards is [Freepik](https://www.freepik.com)

* The background Graveyard image was used from [pixabay](https://pixabay.com/photos/pumpkins-halloween-night-gruesome-7555083) and the designer of the image is [anaterate](https://pixabay.com/users/anaterate-2348028/)

### Music

* The Spooky music was taken from [pixabay](https://pixabay.com/) and the title of the audio is 'Scary night' and was created by [freesound_community](https://pixabay.com/users/freesound_community-46691455)

### Content

* The original idea came from [Code Institute](https://codeinstitute.net/) with the listed ideas for the Milestone Two project. Research was made and ideas taken from [Dev Community](https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j) helped a lot for the original basic game. 

### Support

* I'd like to give a special thank you to my Mentor, Spencer Barriball. He has helped so much with troubleshooting, and answering all my questions.  