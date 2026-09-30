const prompt = require('prompt-sync')();
const n1 = Number(prompt("Enter 1st Number:"));
const n2 = Number(prompt("Enter 2nd Number:"));
const operators = prompt("Enter The Operator +, -, *,/, %");

let result;

if (isNaN(n1) && isNaN(n2)) {
    result = "Invalid number input";
}

else if (!["+", "-", "*", "/", "%"].includes(operators)) {
    result = "not an operator"
}

else {
    switch (operators) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "%":
            result = n1 % n2;
            break;
    }
}
console.log(result);
