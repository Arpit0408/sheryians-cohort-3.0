const prompt = require('prompt-sync')();
const Temprature = Number(prompt("Enter temperature:"));
let unit = prompt("Is it in C or F?").toUpperCase();

if (unit === "C") {
    console.log(`${Temprature}°C = ${(Temprature * 9 / 5) + 32}°F`);
} else if (unit === "F") {
    console.log(`${Temprature}°F = ${((Temprature - 32) * 5 / 9).toFixed(2)}°C`);
}
else {
    console.log("unit is wrong");

}
