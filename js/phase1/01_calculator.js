const prompt = require('prompt-sync')();
let n1 = Number(prompt("Enter the first number: "));
let n2 = Number(prompt("Enter the second number: "));
let op = prompt("Enter the operator (+, -, *, /, %): ");
let result;
if (isNaN(n1) || isNaN(n2)) {
    result = "Invalid number input";
}
else if (!["+", "-", "*", "/", "%"].includes(op)) {
    result = "Invalid operator";
}
else {
    switch (op) {
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
            result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
            break;

        case "%":
            result = n2 !== 0 ? n1 % n2 : "Cannot modulo by zero";
            break;
    }
}
console.log(result);

