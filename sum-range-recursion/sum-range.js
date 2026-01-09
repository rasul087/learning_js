"use strict";

const start = 1;
const end = 100;

const result = sumRange(start, end);
console.log(result);

/**
 * Recursively calculates the sum of all numbers from `from` to `to`
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
function sumRange(from, to) {
  if (from > to) {
    return 0;
  }

  return from + sumRange(from + 1, to);
}
