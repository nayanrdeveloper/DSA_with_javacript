let yourArray = [1, 3, 5, 7, 8, 9, 0];

function reverseArrayCon(array) {
  let reversedArray = [];
  for (i = array.length-1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArrayCon(yourArray));
