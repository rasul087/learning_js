"use strict";

/**
 * Checks whether an array is sorted in ascending order
 * @param {number[]} arr
 * @returns {boolean}
 */
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isSorted;
