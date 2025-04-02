// Write a calculator program that adds, subtracts, multiplies, divides two arguments.

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operation(a, b, op) {
    return op(a, b);
}

console.log(operation(7, 3, add));