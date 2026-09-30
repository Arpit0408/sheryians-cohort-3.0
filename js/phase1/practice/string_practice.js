const stringval = "shadghfjHGHJGHJsdjkgfdJavaScript";
let newstr = "Hello World";
const sentence = "This is a Apple";
const strval = "HTML,CSS,JS";

// Create a string and print its length.
console.log("length of string is ", stringval.length);

// Convert a string into uppercase.
console.log("uppercase", stringval.toUpperCase());

// Convert a string into lowercase.
console.log("lowercase", stringval.toLocaleLowerCase());

// Check if a string includes the word "JavaScript".
console.log("includes", stringval.includes("JavaScript"));

// Extract the word "World" from "Hello World".
console.log("Extract the word", newstr.slice(6));

// Replace "apple" with "mango" in a sentence.
console.log("replacing", sentence.replace("Apple", "Mango"));

// Split "HTML,CSS,JS" into an array.
console.log("in to array", strval.split(","));

// Remove extra spaces from a string.
console.log("extra space remove", newstr.trim(" "));

// Repeat the word "Hi" 5 times.
const word = "Hi";
console.log(word.repeat(5));

// Print the first character of a string.
console.log("1st char of str", newstr.at(0));

// Use template literals to print:"My name is Aman and I am 20 years old"
const name = "Aman";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old`);
