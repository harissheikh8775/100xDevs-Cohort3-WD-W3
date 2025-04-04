/*
Promisified version
*/

//.....................Callback Hell Version....................//
//Back box for set time out promisified version
function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
        console.log("hello");
        setTimeoutPromisified(5000).then(function () {
            console.log("hello there.")
        })
    })
})

//...............Alternate solution.................//
//..............Promise chaining...................//
setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
}).then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function () {
    console.log("hello there");
})