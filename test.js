// Write a function `Spacify` which returns the spaced version/space separated version of a given word
// Ex. Specify(‘Superman is evil’) // ⇒  S u p e r m a n  i s  e v i l

// function Spacify(string) {
//   let spacedString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] != " ") {
//       spacedString += string[i] + " ";
//     }
//   }
//   return spacedString;
// }

// console.log(Spacify("Superman is evil"));

// let arr = [1, 2, 3, 4, 5, 6];

// let squreArray = arr.map((item) => {
//   return item * item;
// });

// console.log(squreArray);

// let arr = [1, 2, 3, 4, 5];

// function suqreArray(suqreArray) {
//   let squreArr = [];
//   for (let i = 0; i < suqreArray.length; i++) {
//     squreArr.push(suqreArray[i] * suqreArray[i]);
//   }
//   return squreArr;
// }

// console.log(suqreArray(arr));

function foo(){
  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}
foo();



