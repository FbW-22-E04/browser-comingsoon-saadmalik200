import { doc } from "prettier";
import "./styles/main.scss"; // Don't delete :)
// const countDown = require("moment-countdown");

// All of your javascript should go here :)

const dayField = document.querySelector(".days");
const hourField = document.querySelector(".hours");
const minutesField = document.querySelector(".minutes");
const secondField = document.querySelector(".seconds");
const divTimer = document.querySelector(".timerDiv");
const innerDiv = document.querySelector(".innerDiv");
// console.log(divTimer);
const newYear = new Date("1 January 2023");
// console.log("🚀 ~ newYear", newYear);

// console.log("🚀 ~ diff", diff)
// console.log("🚀 ~ days", diff / (1000 * 60 * 60 * 24))
// console.log("🚀 ~ hours", diff % (1000 * 60 * 60 * 24))

const days = 1000 * 60 * 60 * 24;
const hours = 1000 * 60 * 60;
const minutes = 1000 * 60;
const seconds = 1000;

function countDown() {
  const now = Date.now(); // ms from 1/1/1970
  const diff = newYear - now;

  const daysLeft = Math.floor(diff / days);
  dayField.textContent = daysLeft;
  //   dayField.closest("p").textContent = "days";
  //   dayField.closest("p").style.color = "white";
  const hoursLeft = Math.floor((diff % days) / hours);
  hourField.textContent = hoursLeft;
  const minutesLeft = Math.floor(((diff % days) % hours) / minutes);
  minutesField.textContent = minutesLeft;
  const secondsLeft = Math.floor((((diff % days) % hours) % minutes) / seconds);
  secondField.textContent = secondsLeft;
  console.log(minutesLeft, secondsLeft);

  //   return [daysLeft, hoursLeft, minutesLeft, secondsLeft];
}

//   innerDiv.insertAdjacentHTML("beforebegin", html);

const interval = setInterval(countDown, 1000);
// console.log(interval);

// console.log(countDown());
// let html = `

//             <h2 class="days">${daysLeft} <span>days</span></h2>
//             <h2 class="hours">${hoursLeft} <span>hours</span></h2>
//             <h2 class="minutes">${minutesLeft} <span>minutes</span></h2>
//             <h2 class="seconds">${secondsLeft} <span>seconds</span></h2>

//     `;
