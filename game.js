//todo Dom Elements
const buttonAgain = document.querySelector(".again");
const titleText = document.querySelector(".titleText");
const secretBox = document.querySelector(".secretNumber");
const inputBox = document.querySelector(".number");
const checkButton = document.querySelector(".check");
const scoreTxt = document.querySelector(".score");
const highScoreText = document.querySelector(".highScore");
const backgroundColor = document.querySelector("body");

//todo Random number generator 1 to 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

//todo Score starting at 20 will decrease on each time.
let score = 20;
//todo HighScore will change if score is grather.
let highScore = 0;

//todo Function for message
const textmessage = (element, message) => {
  element.textContent = message;
};

// const valueInput = (element) => {
//   return Number(element.value);
// };

//todo Actions Check Button
checkButton.addEventListener("click", () => {
  let inputValue = Number(inputBox.value);

  if (!inputValue) {
    textmessage(titleText, "❌ Empty Field");
    titleText.textContent = "❌ Empty Field";
  } else if (inputValue > 20 || inputValue < 0) {
    titleText.textContent = " ⚠️ Choose a correct Number";
  } else if (inputValue === randomNumber) {
    titleText.textContent = "🎉 You WIN !!!!!";
    if (score > highScore) highScoreText.textContent = score;
  } else if (inputValue !== randomNumber) {
    if (score > 1) {
      titleText.textContent = inputValue > randomNumber ? "To High" : "To Low";
      score--;
      scoreTxt.textContent = score;
    } else {
      titleText.textContent = "You Lose";
      scoreTxt.textContent = 0;
    }
  }
});

//todo Actions Again Button
buttonAgain.addEventListener("click", () => {
  // Generate Random number again
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  // Reset Score Value
  score = 20;
  scoreTxt.textContent = score;
  // Reset Original Message
  titleText.textContent = "GUESS MY NUMBER!";
  // Reset Input Field
  inputBox.value = " ";
  // Reset Secret Box
  secretBox.textContent = "?";
});
