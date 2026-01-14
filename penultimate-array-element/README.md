# Penultimate Array Element

Logs the second-to-last element of an array or `null` if it does not exist.

---

## 📌 Description

The function returns the penultimate element of an array.
If the array contains fewer than two elements, `null` is returned.

The solution uses the nullish coalescing operator (`??`) to correctly handle
values such as `0`.

---

## 🧪 Example

```js
logPenultimate([35, 9, -25, 0]); // -25
logPenultimate([]);             // null
logPenultimate([5]);            // null
logPenultimate([0, 0]);         // 0
```
---

## 🎯 Topics
- Arrays
- Indexes
- Nullish coalescing operator
- JavaScript basics