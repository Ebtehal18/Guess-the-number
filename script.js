"use strict";
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".secretNumber");
const scoreNumber = document.querySelector(".scoreNumber");
const body = document.querySelector("body");
let randomNumber;
let score = 20;
let highScore = 0;
const restBtn = document.querySelector(".reset");

// display message
function displayMessage(message){
  document.querySelector(".message").innerHTML=message
}
// displayHighscore
function displayHighScore(message){
  document.querySelector(".highScore").textContent =message
}
// randomnumber
function getRandomNumber(){
  return Math.trunc(Math.random() * 20) + 1
}
// displaysecretscore
function displaySecretNumber(message){
  secretNumber.textContent =message
}
// displayScoreNumber
function displayScoreNumber(message){
  scoreNumber.textContent=message
}
// changing bodycolor
function changingBodyColor(color){
  body.style.backgroundColor=color
}
// generate randomnumber
randomNumber=getRandomNumber()
console.log(randomNumber);
// clicking on check the number
document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);
//if no value
  if (!guessVal||guessVal<0||guessVal>20) {
    displayMessage(`<i class="fa-solid fa-ban"></i> No Number`);
  } 
// if player wins 
  else if (guessVal === randomNumber) {
    displaySecretNumber(randomNumber);
    changingBodyColor("rgb(0 103 16 / 69%)");
    displayMessage(`<i class="fa-solid fa-circle-check"></i> Corect Number`);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } 
  // guess is wrong
  else if(guessVal!==randomNumber){
    if (score > 1) {
          displayMessage(guessVal > randomNumber?`it's too low <i class="fa-solid fa-arrow-trend-down"></i>`:`it's too high <i class="fa-solid fa-arrow-trend-up"></i>`);
          score--;
          displayScoreNumber(score);
        } 
        else {
          displayScoreNumber(0);
          displayMessage(`you lost the game <i class="fa-solid fa-heart-crack"></i>`);
        }
      }
  })
 
restBtn.addEventListener("click", function () {
  score = 20;
  randomNumber = getRandomNumber();
  displayScoreNumber(score);
  displayMessage(`Start guessing...`);
  document.querySelector(".guess").value = "";
  changingBodyColor("#2a2727");
  displaySecretNumber("?");
});
