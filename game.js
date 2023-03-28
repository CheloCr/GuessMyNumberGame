//todo DOM ELEMENTS
const buttonAgain = document.querySelector(".again");
const titleText = document.querySelector(".titleText");
const secretBox = document.querySelector(".secretNumber");
const inputBox = document.querySelector(".number");
const checkButton = document.querySelector(".check");
const scoreTxt = document.querySelector(".score");
const highScoreText = document.querySelector(".highScore");

//todo Random number generator 1 to 20
let randomNumber = Math.trunc(Math.random() * 20);
secretBox.textContent = randomNumber; //! solo de prueba para ver #
