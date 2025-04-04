/*
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/



setTimeout(function () {
    console.log("Hi after 1 second.");
    setTimeout(function () {
        console.log("Hello after 3 seconds.");
        setTimeout(function () {
            console.log("Hello there after 5 seconds.")
        },5000)
    },3000)
}, 1000)

//.......................Alternate solution dosen't have call back hell.....................//
function step3Done() {
    console.log("hello there.")
}
function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
}
function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
}
setTimeout(step1Done, 1000);
