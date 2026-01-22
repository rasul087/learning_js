"use strict";

/**
 * Calculates the sum of all positive numbers in a two-dimensional array
 * @param {number[][]} arr
 * @returns {number}
 */
function sumPositive2DArray(arr) {
  let sumOfNumbers = 0;

  for (let innerArr of arr) {
    for (let num of innerArr) {
      if (num > 0) {
        sumOfNumbers += num;
      }
    }
  }

  return sumOfNumbers;
}

module.exports = sumPositive2DArray;
