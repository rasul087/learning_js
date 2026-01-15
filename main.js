"use strict";

const arr = [
  [10, 15],
  [20, 25],
  [30, 35],
  [40, 45],
];
const i = 4;
const j = 0;
/**
 *
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 * @returns
 */
function getValueFromArray(arr, i, j) {
  if (arr[i] === undefined)
    return "Указанные индексы выходят за границы массива.";
  if (arr[i][j] === undefined)
    return "Указанные индексы выходят за границы массива.";
  return arr[i][j];
}

console.log(getValueFromArray(arr, i, j));
