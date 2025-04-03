/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

    let lowerStr = str.toLowerCase();
    let i = 0;
    let j = lowerStr.length - 1;
    while (i < j) {
        if (lowerStr[i] !== lowerStr[j]) {
            return false;
        }
        i++;
        j--;
    }
  return true;
}

let str = "NITTIN";
console.log(isPalindrome(str));
let str1 = "haris";
console.log(isPalindrome(str1));

/*
......................EASY WAY TO DO THE SAME PROBLEM........................
function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const filteredStr = lowercaseStr.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
  const reversedStr = filteredStr.split('').reverse().join('');
  return filteredStr === reversedStr;
}
*/