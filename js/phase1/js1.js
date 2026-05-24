const prompt = require('prompt-sync')();

console.log("Hello World");
console.log(42);
console.log(true);
console.log(`My name is ${'Aman'}, I am ${25} years old`);


console.log("Normal message");
console.warn("This is a warning");      // shown in yellow in browsers
console.error("This is an error");      // shown in red
console.table([1, 2, 3]);               // prints data as a table


// This is a single-line comment

/*
   This is a
   multi-line comment
*/

console.log("Hello"); // You can also comment at the end of a line

var a = 25;
console.log(a);
let name = "Arpit";
console.log(name);
const PI = 3.14159;
console.log(PI);


// declerization vs inililixation
// declaration is creating a value
// inililization is giving a value to a declaration



// Basic difference between var let and const
// | Feature | `var` | `let` | `const` |
// | --- | --- | --- | --- |
// | Can re-assign? | Yes | Yes | **No** |
// | Can re-declare in same scope? | Yes | No | No |
// | Scope | Function | Block | Block |
// | Hoisted? | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ) |



// For now, just remember:

// - Use `const` by default.
// - Use `let` if you know the value will change.
// - **Avoid `var`** in modern code



// Data Types in JavaScript
// 1. Primitive DataTypes
//    - String
//    - Number
//    - Boolean
//    - Undefined
//    - Null
//    - BigInt
//    - Symbol

// 2. Non-Primitive DataTypes
//    - Object


// Type converiosn vs type coercian
let str = "25"
console.log(str)
console.log(typeof (str))

// explicit type conversion
let num = Number(str);
console.log(typeof (num));

// type coercian
const add = str + 10;
console.log(add);
console.log(typeof add);

const sub = str - 5;
console.log(sub);
console.log(typeof sub);

// Truthy and Falsy values
// falsy - undefined, null, 0, "", false, NaN, -0
// truthy - everything else

// Operators
// Arithmatic Operators
console.log(10 + 5);  // Addition
console.log(10 - 5);  // Subtraction
console.log(10 * 5);  // Multiplication
console.log(10 / 5);  // Division
console.log(10 % 5);  // Modulus
console.log(10 ** 5);  // Exponentiation

// Increment and Decrement
let b = 10;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// Assignment Operators
let c = 10;
console.log(b += 10);
console.log(b -= 10);
console.log(b *= 10);
console.log(b /= 10);
console.log(b %= 10);

// Comparison Operators
console.log(10 == 10);
console.log(10 != 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// Identity Operators
console.log(10 === 10);
console.log(10 !== 10);

// Logical Operators
console.log(10 && 10);
console.log(10 || 10);
console.log(!10);

// Ternary Operator
let d = 10;
console.log(c > 10 ? "true" : "false");


// Rule: Always use === and !==. Avoid == and != because they do type coercion and cause hidden bugs.

// **Short-circuit behavior:**
// - `&&` returns the **first falsy** value, or the last value if all are truthy.
// - `||` returns the **first truthy** value, or the last value if all are falsy.


// Ternary Operator (Shorthand if-else)
let age = 15;
let status = age > 18 ? "Adult" : "Minor";
console.log(status);

// Syntax: condition ? valueIfTrue : valueIfFalse

// String
// A string is sequence of charcters wrapped in '',"", ``

let s1 = 'Single quotes';
let s2 = "Double quotes";
let s3 = `Backticks (template literals)`;

// string concatenation
let user_name = "Arpit";
let user_age = 25;
console.log("My name is " + user_name + " and I am " + user_age + " years old");

// template literals
console.log(`My name is ${user_name} and I am ${user_age} years old`);

const firstName = "Aditya";
const lastName = "Kumar";
console.log(firstName + " " + lastName);
// output: Aditya Kumar

// Useful String Methods
let s4 = "hello world";
console.log(s4.length);
console.log(s4.toUpperCase());
console.log(s4.toLowerCase());
console.log(s4.indexOf('world'))
console.log(s4.includes("hello"))
console.log(s4.slice(0, 5))
console.log(s4.substring(4, 9))
console.log(s1.replace("world", "Js"));
console.log(s4.split(" "));
console.log("   hi   ".trim());
console.log("abc".repeat(3));
console.log(s4.charAt(1));
console.log(s4.charCodeAt(0));
console.log(s4.startsWith("hello"));
console.log(s4.endsWith("world"));
console.log(s4.includes("hello"));

// Important: Strings are immutable. Methods don't change the original — they return a new string.

let x = "hello";
x.toUpperCase();
console.log(x); // "hello" — unchanged!
x = x.toUpperCase();
console.log(x); // "HELLO"


// JavaScript has one number type — both integers and decimals are just
let int = 42;
let float = 3.14;
let negative = -100;
let exponent = 5e3;     // 5000

// useful number methods
let n = 3.14159;
console.log(n.toFixed(2));
console.log(Number("42"));
console.log(Number("42abc"));
console.log(parseInt("42px"));
console.log(parseFloat("3.14kg")); // 3.14
console.log(isNaN("hello"));   // true
console.log(Number.isInteger(5));   // true
console.log(Number.isInteger(5.5)); // false


// The Math Object
// Math is a built-in object with mathematical methods and constants.
console.log(Math.PI);         // 3.14159...
console.log(Math.E);          // 2.71828...
console.log(Math.abs(-10));     // 10
console.log(Math.ceil(5.1));    // 6
console.log(Math.floor(5.9));   // 5
console.log(Math.round(5.5));   // 6
console.log(Math.max(1, 5, 2)); // 5
console.log(Math.min(1, 5, 2)); // 1
console.log(Math.pow(2, 3));    // 8
console.log(Math.sqrt(16));     // 4
console.log(Math.random());     // 0 to 1

// Conditionals
// if/else/elseif
let marks = 95;

if (marks >= 90) {
   console.log("A grade");
} else if (marks >= 75) {
   console.log("B grade");
} else if (marks >= 50) {
   console.log("C grade");
} else {
   console.log("Fail");
}

// Nested if
let DrivingAge = 20;
let hasLicense = true;

if (DrivingAge >= 18) {
   if (hasLicense) {
      console.log("Can drive");
   } else {
      console.log("Get a license first");
   }
} else {
   console.log("Too young to drive");
}



// Loops
// for loop
for (let i = 0; i < 10; i++) {
   console.log(i);
}

// while Loop
let count = 0;
while (count < 5) {
   console.log(count);
   count++;
}
// Use while when you don't know in advance how many times to loop.

// do...while Loop
// Like while, but runs at least once (because the condition is checked at the end).

let x1 = 10;
do {
   console.log(x1);
   x1++;
} while (x1 < 5);
// Prints 10 once, even though condition is false


// for...of Loop (for arrays and strings)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
   console.log(fruit);
}

let word = "Hello";
for (let char of word) {
   console.log(char);
}

// for...in Loop (for objects)
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

// 15. Taking User Input
let user_name1 = prompt("What is your name? ");
console.log("Hello, " + user_name1);



