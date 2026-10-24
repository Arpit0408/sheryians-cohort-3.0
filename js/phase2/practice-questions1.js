// Part 1 — Functions Basics (1–20)

// Create a function named greet that prints "Hello World".
function greet() {
  console.log("Hello World");
}
greet();

// Create a function add(a, b) that returns the sum.
function add(a, b) {
  let sum = a + b;
  return sum;
}
console.log(add(2, 3));

// Write a function to calculate the square of a number.
function CalculateSquare(sq) {
  let sqValue = sq * sq;
  return sqValue;
}
console.log(CalculateSquare(4));

// Create a function that checks whether a number is even or odd.
function CheckEvenOrOdd(val) {
  if (val % 2 == 0) console.log(`${val} is even`);
  else console.log(`${val} is odd`);
}
CheckEvenOrOdd(39);

// Write a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(15));

// Create a function with default parameter "Guest".
function fnDefault(user = "Akash") {
  console.log(user);
}
fnDefault();

// Write a function that returns the greater of two numbers.
function returnGreater(v1, v2) {
  if (v1 > v2) return v1;
  else return v2;
}

// Create a function to calculate area of rectangle.
function areofrectengle(l, b) {
  let area = l * b;
  return area;
}
console.log(areofrectengle(45, 34));

// Write a function that returns "Adult" if age ≥ 18 else "Minor".
function checkAdult(val) {
  return val >= 18 ? "Adult" : "Minor";
}
console.log(checkAdult(23));

// Create a function to reverse a string.
function reverseString(str) {
  let reversestr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }
  console.log(reversestr);
}
reverseString("ok");
