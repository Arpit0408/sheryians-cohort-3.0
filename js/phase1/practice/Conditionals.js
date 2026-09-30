let n1 = 15;
let n2 = 89;
let n3 = 67;

// Check whether a number is positive or negative.
if (n1 > 0) {
  console.log("n1 is a positive number");
} else {
  console.log("n1 is negative");
}

// Check whether a number is even or odd.
if (n1 % 2 == 0) {
  console.log("n1 is a even");
} else {
  console.log("n1 is odd");
}

// Check whether a person is eligible to vote.
if (n1 < 18) {
  console.log("n1 is not eligible to vote");
} else {
  console.log("n1 is eligible to vote");
}

// Find the largest among two numbers.
if (n1 < n2) {
  console.log("n1 is lessser");
} else {
  console.log("n1 is greater");
}

// Find the largest among three numbers.
if (n1 < n2) {
  if (n2 < n3) {
    console.log("n3 is greater");
  } else {
    console.log("n2 is greater");
  }
} else if (n1 > n2) {
  if (n1 < n3) {
    console.log("n3 is greater");
  } else {
    console.log("n1 is greater");
  }
}

// Check whether a year is a leap year.
const year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Check whether a number is divisible by both 3 and 5.
const num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Number is divisible by both 3 and 5");
} else {
  console.log("Number is not divisible by both 3 and 5");
}

// Create a simple grading system:
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

// Check whether a username is "admin" and password is "1234".
const username = "admin";
const password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}
