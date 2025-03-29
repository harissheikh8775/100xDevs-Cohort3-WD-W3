// PROBLEM STATEMENT
// Write a function called canVote that returns true or false if the age of a user is > 18

// SOLUTION
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

let output = canVote(30);
let output2 = canVote(5);
console.log(output);
console.log(output2);