function reverseText(text){
    let reverseString = ""
    for(let i=text.length - 1; i>= 0; i--){
        reverseString = reverseString + text[i];
    }
    return reverseString;
}

function reverseText2(text) {
    return text.split('').reverse().join();
}

const reverseText3 = text => [...text].reverse().join();

console.log(reverseText("Hello"));
console.log(reverseText2("Hello"));
console.log(reverseText3("Hello"));
