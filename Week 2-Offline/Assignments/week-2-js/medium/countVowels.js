/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let lowerStr = str.toLowerCase();
    let numberOfVowels = 0;

    for (let i = 0; i < lowerStr.length; i++){
        if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u') {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}


let str = "HARIS UL ISLAM";
console.log(countVowels(str));


/*
...................EASY WAY TO DO THE SAME PROBLEM.........................
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
*/