# Sum Range (Recursive)

This project contains a JavaScript function that calculates the sum of all numbers in a given range using recursion.

---

## 📌 Description

The function `sumRange(from, to)` returns the sum of all integers from `from` to `to` (inclusive).

Example:
1 to 5 → 1 + 2 + 3 + 4 + 5 = 15
10 to 13 → 10 + 11 + 12 + 13 = 46


---

## 🧠 How it works

1. If `from` is greater than `to`, return `0`
2. Otherwise, add `from` to the result of `sumRange(from + 1, to)`
3. Repeat until the base condition is reached

---

## 📂 Files
sum-range.js


---

## ▶️ How to run

```bash
node sum-range.js
```

🎯 Purpose

This project was created to practice recursion and understand how range-based problems can be solved recursively.
