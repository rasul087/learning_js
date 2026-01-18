"use strict";

/**
 * Compares two arrays and checks whether they are equal by length, order, and values
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
const arr1 = [2, 5, -3, -3, 10];
const arr2 = [2, 5, -3, -3, 10];

function comparingArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(comparingArrays(arr1, arr2));
