// Bubble Sort

let arr = [8, 5, 1, 9, 3, 2, 23, 22, 21, 20, 78, 54, 90, 34, 21, 12, 76];

function swapArray(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// swapArray(arr, 0, 1);

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapArray(array, j, j + 1);
        swapped = true;
      }
    }
    if ((swapped = false)) {
      break;
    }
  }
}

bubbleSort(arr);
console.log(arr);
