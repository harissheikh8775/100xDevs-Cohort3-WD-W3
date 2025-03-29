// PROBLEM STATEMENT
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

// SOLUTION
function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
  } else {
    console.log("The number " + number + " is odd.");
    }
}

let output = oddOrEven(7);
let output2 = oddOrEven(10);

console.log(output);
console.log(output2);
