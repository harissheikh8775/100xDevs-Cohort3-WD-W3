function setTimeoutPromisified(duration) {
    let obj = new Promise(resolve => {
        setTimeout(resolve, duration);
    })
    return obj;
}

function callback() {
    console.log("3 seconds has passed.")
}

setTimeoutPromisified(3000).then(callback);