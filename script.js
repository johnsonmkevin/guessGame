"use strict";

let start = document.getElementById("start");
let resetPage = document.getElementById("resetBtn");

let output = document.getElementById("outputText");

let number = Math.floor(Math.random() * 100);
console.log("number" + number);

start.addEventListener("click", function () {
  let variaInput = document.getElementById("UserInput");
  let input = variaInput.value;
  console.log(input);
  if (input == number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
    output.style.color = "green";
  } else if (input < number) {
    output.innerHTML = "Your number is too low, try again";
  } else if (input > number) {
    output.innerHTML = "Your number is too high try again";
  }
  variaInput.value = "";
});
resetPage.addEventListener("click", () => {
  window.location.reload();
});
