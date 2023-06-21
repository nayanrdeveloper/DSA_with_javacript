// Kth smallest element

// Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.

let arr = [7, 10, 4, 3, 20, 15];

function smallestEle(array,k){
    array.sort((a,b) => a-b);

    return array[k-1];
}

console.log(smallestEle(arr,2));

function kthMaxEle(array, k){
    array.sort((a,b) => b-a);
    return array[k-1];
}

console.log(kthMaxEle(arr,2));