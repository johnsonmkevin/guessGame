"use strict";

let start = document.getElementById("start");
let resetPage = document.getElementById("resetBtn");

let output = document.getElementById("outputText");
let variaInput = document.getElementById("UserInput");

let number
function setNum() {
  number = Math.floor(Math.random() * 100);
  console.log("number", number); 
}
setNum();

start.addEventListener("click", function () {
  
  let input = variaInput.value;
  console.log(input);
  if (input == number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "Your number is too low, try again";
  } else if (input > number) {
    output.innerHTML = "Your number is too high try again";
  }
  variaInput.value = "";
});
resetPage.addEventListener("click", () => {
 // window.location.reload();
  setNum();
  output.innerHTML = "Play Again!"
  variaInput.value = "";
});
