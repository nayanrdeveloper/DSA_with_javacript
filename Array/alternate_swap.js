// Alternate array swap
// array = [2,5,7,8,3,9,1]
// output [5,2,8,7,9,3,1]

let numbers = [2, 5, 7, 8, 3, 9, 1];

for (let i = 0; i < numbers.length; i += 2) {
  if (i + 1 < numbers.length) {
    let swapVar = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = swapVar;
  }
}

console.log(numbers);
