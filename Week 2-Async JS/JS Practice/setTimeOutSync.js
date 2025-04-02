//sync type of set time out function

function setTimeOutSync(timeout) {
    let startTime = new Date();

    while (1) {
        let currentTime = new Date();

        if (currentTime.getTime() - startTime.getTime() > timeout) {
            break;
        }
    }
}

setTimeOutSync(10000);
console.log("hi there, it's set time out sync");