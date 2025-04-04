/*
Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/

let counter = 0;
function callback() {
    console.log(counter);
    counter++;
    setTimeout(callback, 1000);
    
}

setTimeout(callback, 1000);