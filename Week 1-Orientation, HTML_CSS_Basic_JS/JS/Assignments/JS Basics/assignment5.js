// PROBLEM STATEMENT
// Write a function called sum that finds the sum from 1 to a number

// SOLUTION 
function sumFrom1toN(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}
let finalSum = sumFrom1toN(100);
console.log(finalSum);