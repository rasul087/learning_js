"use strict";

/**
 * Logs the penultimate element of an array or null if it does not exist
 * @param {Array} arr
 */
function logPenultimate(arr) {
  console.log(arr[arr.length - 2] ?? null);
}

// Examples
logPenultimate([35, 9, -25, 0]); // -25
logPenultimate([]); // null
logPenultimate([5]); // null
logPenultimate([0, 0]); // 0

module.exports = logPenultimate;
