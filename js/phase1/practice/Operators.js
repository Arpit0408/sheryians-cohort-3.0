let n1 = 10;
let n2 = 28;

// Add two numbers and print the result.
console.log(n1 + n2);

// Find the remainder when 25 is divided by 4.
console.log("remider for 25 devided by 4 is ", 25 % 4);

// Find the square of a number using exponent operator.
console.log("suqare od n1 is ", n1 ** 2);

// Increment a variable using ++.
let n3 = n1++;
n2--;
console.log("increament using ++ is ", n1);
console.log("dereament using -- is ", n2);

// Use += operator to increase a variable by 20.
n1 += 20;
console.log("Use += operator to increase a variable by 20.", n1);

// Compare two numbers using >, <, >=, <=.
console.log("if val is greater", n1 > n2);
console.log("if val is less", n1 < n2);
console.log("if val is less equal", n1 <= n2);
console.log("if val is greater equal", n1 >= n2);

// Check if two values are strictly equal using ===.
console.log("check two val strcictly equal", n1===n2);

// Compare "10" and 10 using both == and ===.
console.log("Compare using both == and ===." , "10"===10, "10"==10);

// Create two boolean variables and test &&, ||, and !.
const a = true;
const b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false
console.log(!b);     // true