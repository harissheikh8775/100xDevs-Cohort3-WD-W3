// PROBLEM STATEMENT
// Also tell the user if they are legal to vote or not

// SOLUTION

// PROBLEM STATEMENT
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// SOLUTION 
function greets(user) {
    if (user.gender === "Male" && user.age>=18) {
        console.log("Hi Mr. " + user.name + ", your age is " + user.age);
        console.log("You can vote.")
    }
    else if (user.gender === "Female" && user.age >= 18) {
        console.log("Hi Mrs. " + user.name + ", your age is " + user.age);
        console.log("You can vote.");
    } else if(user.age>=18){
        console.log("Hi Others " + user.name + ", your age is " + user.age);
        console.log("You can vote.");
    }

    if (user.gender === "Male" && user.age < 18) {
      console.log("Hi Mr. " + user.name + ", your age is " + user.age);
      console.log("You can't vote.");
    } else if (user.gender === "Female" && user.age < 18) {
      console.log("Hi Mrs. " + user.name + ", your age is " + user.age);
      console.log("You can't vote.");
    } else if (user.age < 18) {
      console.log("Hi Others " + user.name + ", your age is " + user.age);
      console.log("You can't vote.");
    }



}

let user = {
    name: "Haris",
    age: 20,
    gender: "Male"
};

greets(user);