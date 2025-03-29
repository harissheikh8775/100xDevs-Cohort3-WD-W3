// PROBLEM STATEMENT
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// SOLUTION 
function greets(user) {
    if (user.gender === "Male") {
        console.log("Hi Mr. " + user.name + ", your age is " + user.age);
    }
    else if (user.gender === "Female") {
        console.log("Hi Mrs. " + user.name + ", your age is " + user.age);
    }
    else {
        console.log("Hi Others " + user.name + ", your age is " + user.age);
    }
}

let user = {
    name: "Haris",
    age: 20,
    gender: "Male"
};

greets(user);