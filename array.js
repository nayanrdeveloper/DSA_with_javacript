const fruits = ['Apple', 'banana', 'Orange', 'Grapes', 'Mango'];

// push
fruits.push('Pineapple');
console.log(fruits); // 0(1) not loop only add last element

// pop
fruits.pop();
console.log(fruits); // 0(1) not use loop only remove last element

// slice
fruits.splice(2,2);
console.log(fruits); // 0(n) because shift all element index so used loop



