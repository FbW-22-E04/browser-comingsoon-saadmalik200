import moment from "moment";
import "./styles/main.scss"; // Don't delete :)
const countDown = require("moment-countdown");

// All of your javascript should go here :)

const newYear = new Date("1 January 2023");
console.log(newYear);

const now = Date.now();
console.log(now);

const days = 1000 * 60 * 60 * 24;
const hours = 1000 * 60 * 60;
const minutes = 1000 * 60;
const seconds = 1000;

const diff = newYear - now;
const daysLeft = Math.floor(diff / days);
const hoursLeft = Math.floor((diff % days) / hours);
const minutesLeft = Math.floor(((diff / days) % hours) / minutes / seconds);

console.log(daysLeft, hoursLeft, minutesLeft);
// console.log(days);
// console.log(hours);
