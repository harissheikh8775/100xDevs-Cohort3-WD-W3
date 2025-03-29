// PROBLEM STATEMENT
// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

//SOLUTION
function sum(num1, num2) {
    return num1 + num2;
}
let output = sum(5, 6);
let strOutput = sum("1", "2");
console.log(output);
console.log(strOutput)