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
    {name: "bat", image:"assets/images/bat.png"},
    {name: "black-cat", image:"assets/images/black-cat.png"},
    {name: "cauldron", image:"assets/images/cauldron.png"},
    {name: "blood", image:"assets/images/blood.png"},
    {name: "death", image:"assets/images/death.png"},
    {name: "frankenstein", image:"assets/images/frankenstein.png"},
    {name: "potion", image:"assets/images/potion.png"},
    {name: "trident", image:"assets/images/trident.png"},
    {name: "witch", image:"assets/images/witch.png"},
    {name: "dracula", image:"assets/images/dracula.png"},
    {name: "zombie", image:"assets/images/zombie.png"},
    {name: "grave", image:"assets/images/grave.png"},
];

