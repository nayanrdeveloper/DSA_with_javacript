// Google Question
// given array if same characotrt first so give input like [2,4,5,6,7,2,4] given 2
// [1,1,2,4,6] given 1


function firstRecursiveCharactor(inputArray){
    for (i = 0; i < inputArray.length; i++){
        for (let j=i+ 1; j < inputArray.length; j++){
            if (inputArray[i] == inputArray[j]) {
                return inputArray[i];
            }
        }
    }
}

function firstRecursiveCharactor2(inputArray){
    let map = {};
    for (let i = 0; i< inputArray.length; i++){
        if (map[inputArray[i]] !== undefined){
            return inputArray[i];
        }
        else{
            map[inputArray[i]] = i;
        }
    }

    return undefined;
}

console.log(firstRecursiveCharactor([1,4,6,8,5,1,2]));
console.log(firstRecursiveCharactor2([1,4,6,8,5,1,2]));