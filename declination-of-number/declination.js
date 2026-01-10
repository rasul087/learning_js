"use strict";

/**
 * Returns the correct word form depending on the given number
 * @param {number} count
 * @param {string} one
 * @param {string} two
 * @param {string} five
 * @returns {string}
 */

function declinationOfNumber(count, one, two, five) {
  if (count % 100 > 10 && count % 100 < 15) return five;
  if (count % 10 === 1) return one;
  if (count % 10 >= 2 && count % 10 <= 4) return two;
  return five;
}

// Examples
console.log(`Вам пришло 1 ${declinationOfNumber(1, "сообщение", "сообщения", "сообщений")}.`);
console.log(`Вам пришло 11 ${declinationOfNumber(11, "сообщение", "сообщения", "сообщений")}.`);
console.log(`Вам пришло 21 ${declinationOfNumber(21, "сообщение", "сообщения", "сообщений")}.`);
console.log(`Вам пришло 33 ${declinationOfNumber(33, "сообщение", "сообщения", "сообщений")}.`);
console.log(`Вам пришло 45 ${declinationOfNumber(45, "сообщение", "сообщения", "сообщений")}.`);
console.log(`Вам пришло 113 ${declinationOfNumber(113, "сообщение", "сообщения", "сообщений")}.`);
