//Maximum and minimum of an array using minimum number of comparisons

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

let arr = [3, 5, 4, 1, 9];

function minMaxElement(array) {
  let minValue = array[0];
  let maxValue = array[0];

  for (i = 0; i < arr.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
    if (array[i] < maxValue) {
      minValue = array[i];
    }
  }

  return {
    minValue,
    maxValue,
  };
}

console.log(minMaxElement(arr));
