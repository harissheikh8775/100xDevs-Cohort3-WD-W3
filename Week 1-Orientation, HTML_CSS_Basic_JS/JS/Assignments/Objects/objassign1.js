// PROBLEM STATEMENT
// Write a function that takes a user as an input and greets them with their name and age

// SOLUTION 
function greet(user) {
    console.log("Good morning " + user.name + " your age is "+user.age+".");
}

let user = {
    name: "Haris",
    age: 20,
};
greet(user);