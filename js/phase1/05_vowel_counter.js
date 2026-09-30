const prompt = require('prompt-sync')();
const string = prompt("Enter a string:").toLowerCase();
const vowels = ["a", "e", "i", "o", "u"]
let count = 0;

for (let char of string) {
    if (vowels.includes(char)) count++;
}

console.log(count);
