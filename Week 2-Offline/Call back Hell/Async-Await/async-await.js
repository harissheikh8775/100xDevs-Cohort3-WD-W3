function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

//..................Async and Await................//
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");

    await setTimeoutPromisified(2000);
    console.log("hello");

    await setTimeoutPromisified(5000);
    console.log("hello there");
}

solve();

console.log("After the solve the function")