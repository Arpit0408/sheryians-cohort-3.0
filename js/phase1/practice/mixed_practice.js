// Create a mini biodata program using variables and template literals.
const name = "Arpit Paliwal";
const age = "21";
console.log(`My name is ${name} and age is ${age}`);

// Calculate the area of a rectangle.
const length = 10;
const breadth = 5;
const area = length * breadth;
console.log(area);

// Calculate the simple interest.
const P = 100;
const R = 2;
const T = 10;
let si = (P * R * T) / 100;
console.log(si);

// Convert temperature from Celsius to Fahrenheit.
const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

// Convert kilometers into meters.
const km = 5;
const meters = km * 1000;
console.log(meters);

// Calculate total marks and percentage of 5 subjects.
const m1 = 80;
const m2 = 75;
const m3 = 90;
const m4 = 85;
const m5 = 70;
const total = m1 + m2 + m3 + m4 + m5;
const percentage = (total / 500) * 100;
console.log("Total marks:", total);
console.log("Percentage:", percentage);

// Calculate electricity bill based on units consumed.
const units = 100;
const rate = 5;
const bill = units * rate;
console.log("Electricity bill:", bill);

// Create a username generator using first name and birth year.
const firstName = "Aman";
const birthYear = 2005;
const username = firstName + birthYear;
console.log(username);

// Check whether a string starts with a specific letter.
const str = "Aman";
console.log(str.startsWith("A"));

// Count total characters in a sentence excluding spaces
const sentence = "Hello World";
const result = sentence.replaceAll(" ", "").length;
console.log(result);


