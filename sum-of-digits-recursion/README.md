# Sum of Digits (Recursive)

This project contains a simple JavaScript function that calculates the sum of all digits in a number using recursion.

## 📌 Description

The function `sumOfDigits(number)` takes a positive integer and returns the sum of its digits.  
The calculation is done recursively by splitting the number into its last digit and the remaining part.

Example:
123 → 1 + 2 + 3 = 6
9876 → 9 + 8 + 7 + 6 = 30


---

## 🧠 How it works

1. Take the last digit of the number using `% 10`
2. Remove the last digit using `Math.floor(number / 10)`
3. Add the last digit to the result of the recursive call
4. Repeat until the number becomes `0`

---

## 🧪 Example

```js
sumOfDigits(123);   // 6
sumOfDigits(9876);  // 30
sumOfDigits(5);     // 5
```

📂 File
sum-of-digits.js

▶️ How to run

Make sure you have Node.js installed.
Run the file in the terminal:
node sum-of-digits.js


🛠 Code
"use strict";

/**
 * Recursively calculates the sum of all digits in a number
 * @param {number} number
 * @returns {number}
 */
function sumOfDigits(number) {
  if (number === 0) {
    return 0;
  }

  const lastDigit = number % 10;
  const remainingNumber = Math.floor(number / 10);

  return lastDigit + sumOfDigits(remainingNumber);
}

console.log(sumOfDigits(123));


🎯 Purpose

This project was created as a learning exercise to understand recursion in JavaScript.
