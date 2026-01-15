"use strict";

/**
 * Returns a value from a 2D array by row and column indexes
 * @param {Array<Array>} arr
 * @param {number} i
 * @param {number} j
 * @returns {*|string}
 */
function getValueFromArray(arr, i, j) {
  const error = "Указанные индексы выходят за границы массива.";

  if (arr[i] === undefined) {
    return error;
  }

  if (arr[i][j] === undefined) {
    return error;
  }

  return arr[i][j];
}

module.exports = getValueFromArray;
