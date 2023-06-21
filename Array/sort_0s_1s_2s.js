function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
  
    while (mid <= high) {
      if (arr[mid] === 0) {
        // Swap arr[mid] and arr[low]
        [arr[mid], arr[low]] = [arr[low], arr[mid]];
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        // No need to swap, just move mid
        mid++;
      } else if (arr[mid] === 2) {
        // Swap arr[mid] and arr[high]
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [1, 0, 2, 1, 0, 2, 1];
  const sortedArray = sortArray(arr);
  console.log(sortedArray);