arr.shift();
arr.push(50, 15);
const DeletedSecondElement = arr.splice(1, 1);
arr.push(DeletedSecondElement[0]);

console.log(arrayLengthControl(arr.length));

function arrayLengthControl(arrLength) {
  if (arr.length > 5) {
    arr.pop();
    arrayLengthControl(arr.length);
  }
  return arr;
}
