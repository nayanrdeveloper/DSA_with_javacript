// Selection Sort

let arr = [4, 2, 7, 8, 5, 9, 3];

function swapArray(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSorted(array) {
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    swapArray(array, i, min_index);
  }
}

selectionSorted(arr);
console.log(arr);
