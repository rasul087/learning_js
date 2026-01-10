"use strict";

/**
 * Compares two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const compareNumbers = (a, b) => a - b;

console.log(compareNumbers(3, 7)); // negative
console.log(compareNumbers(7, 3)); // positive
console.log(compareNumbers(3, 3)); // 0
