let n1 = 24;
let n2 = 78;

// Take two numbers and print which one is greater.
if (n1 < n2) {
  console.log(n2);
} else {
  console.log(n1);
}

// Check whether a number lies between 10 and 50.
if (n1 >= 10 && n1 <= 50) {
  console.log("The number lies between 10 and 50");
} else {
  console.log("The number does not lie between 10 and 50");
}

// Check whether a password length is greater than 8.
let password = "mypassword";
if (password.length > 8) {
  console.log("yes");
} else {
  console.log("no");
}

// Check if a person can drive:
let age = 19;
if (age < 18) {
  console.log("he cannot drive");
} else {
  console.log("he can drive");
}

// Check whether a number is divisible by 2, 3, or both.
if (n1 % 6 == 0) {
  console.log("divisible by both");
} else if (n1 % 3 == 0) {
  console.log("divisible by 3");
} else if (n1 % 2 == 0) {
  console.log("divisible by 2");
} else {
  console.log("not divisible by anyone");
}

// Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Find whether a number is a multiple of 10.
if (n1 % 10 == 0) {
  console.log("multiple of 10");
} else {
  console.log("not a multiple of 10");
}

// Create a simple discount calculator.
let price = 800;
if (price >= 1000) {
  let discount = price * 0.2;
  let finalPrice = price - discount;
  console.log(finalPrice);
} else {
  let discount = price * 0.1;
  let finalPrice = price - discount;
  console.log(finalPrice);
}

// Check whether a product is in stock.
let stock = 5;
if (stock > 0) {
  console.log("Product is in stock");
} else {
  console.log("Product is out of stock");
}

// Calculate final bill after GST.
let gst = price * 0.2;
console.log(price + gst);

// Generate a random OTP of 4 digits.
const randomotp = Math.floor(Math.random() * 10000) + 1;
console.log(randomotp);

// Reverse a 3-letter string manually.
let str = "PS5";
let element = "";
for (let index = str.length - 1; index >= 0; index--) {
  element += str[index];
}
console.log(element);

// Find the last character of a string.
const strlen = str.length;
console.log(str[strlen - 1]);

// Convert a full name into uppercase initials.
console.log(str.toLowerCase());

// Check whether two strings are equal ignoring case sensitivity.
let str1 = "Hello";
let str2 = "hello";
if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Both are equal");
} else {
  console.log("Not equal");
}

// Create a simple login validation system.
let correctUsername = "admin";
let correctPassword = "1234";
let username = "admin";
let passwords = "12344";
if (username === correctUsername && passwords === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

// Find whether a number is a 2-digit or 3-digit number.
let n = 123;
if (n >= 10 && n <= 99) {
  console.log("2-digit number");
} else if (n >= 100 && n <= 999) {
  console.log("3-digit number");
} else {
  console.log("Neither 2-digit nor 3-digit");
}

// Create a mini ATM balance checker.
let balance = 5000;
let withdraw = 2000;
if (withdraw <= balance) {
  balance = balance - withdraw;
  console.log("Withdrawal successful");
  console.log("Remaining balance:", balance);
} else {
  console.log("Insufficient balance");
}

// Simulate a traffic light system using switch.
let light = "red";

switch (light) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid light");
}

// Build a small marksheet generator using variables and conditionals.
let name = "Arpit";

let math = 85;
let science = 72;
let english = 90;

let total = math + science + english;
let percentage = total / 3;

let grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Name:", name);
console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);
console.log("Total:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
