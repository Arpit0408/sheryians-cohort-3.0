let Secret = Math.floor(Math.random() * 10) + 1;
const prompt = require('prompt-sync')();
let num;
let guesscount = 0;
for (num = Number(prompt("Enter guess number:")); num !== Secret; num = Number(prompt("Enter guess number:"))) {
    if (num < Secret) {
        console.log("number is lesser");

    } else {
        console.log("number is greater");
    }
    guesscount++;
}

console.log("number matched", guesscount)