# Compare Arrays

Compares two arrays and checks whether they are equal by length, order, and values.

---

## 📌 Description

The function `comparingArrays` compares two numeric arrays.

It returns `true` if:
- both arrays have the same length
- all elements are equal
- elements are in the same order

Otherwise, the function returns `false`.

Note: Arrays containing `NaN` values at the same positions are considered different,
since `NaN !== NaN` in JavaScript.

---

## 🧪 Example

```js
comparingArrays([2, 5, -3, -3, 10], [2, 5, -3, -3, 10]); // true
comparingArrays([3, NaN, 7], [3, NaN, 7]);             // false
comparingArrays([1, 8, 5, 2], [1, 5, 8, 2]);            // false

```
## Topics
- Arrays
- Loop
- Element comparison
- JavaScript basics