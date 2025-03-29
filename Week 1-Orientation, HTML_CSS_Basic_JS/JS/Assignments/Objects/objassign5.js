// PROBLEM STATEMENT
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// SOLUTION

function userArr(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i].age >= 18) {
            newArr.push(arr[i].name);
        }
    }

    return newArr;
}
let arr = [{
    name: "Haris",
    age: 20,
}, {
    name: "Israr",
    age: 21,
},
{
    name: "Arkan",
    age: 8,
    },
    {
        name: "Salman",
        age:25
}
];
console.log(userArr(arr));