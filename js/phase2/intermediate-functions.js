// Write a function expression for multiplication.
function multiplication(...b) {
  let multiplyval = 1;
  for (let i = 0; i < b.length; i++) {
    multiplyval *= b[i];
  }
  return multiplyval;
}
console.log(multiplication(2, 3, 3, 4));

// Write a function expression for multiplication using arrow fn (Convert a normal function into an arrow function.)
const multiplicationArrow = (...b) => {
  let multiplyval = 1;
  for (let i = 0; i < b.length; i++) {
    multiplyval *= b[i];
  }
  return multiplyval;
};
console.log(multiplicationArrow(2, 13, 45, 21));

// Create a function that accepts unlimited numbers and returns their sum using rest operator.
const addValues = (...values) => {
  console.log(values);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
};

console.log(addValues(2, 3, 4, 56));

// Write a function that counts vowels in a string.
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};
console.log(countVowels("this is a car"));

// Create a function that checks if a string is palindrome.
const checkPalindrome = (str) => {
  let reversestr = "";
  let isPalindrome = false;
  for (let i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }
  if (str === reversestr) {
    isPalindrome = true;
  }
  return isPalindrome;
};
console.log(checkPalindrome("MADAM"));

// Write a callback function example using setTimeout.
const callbackFn = () => {
  console.log("hello");
  setTimeout(() => {
    console.log("logging after 5 second using settimout ");
  }, 5000);
};
callbackFn();

// Create a higher-order function that executes another function twice.
const higherOrderFn = (fn) => {
  fn();
  fn();
};
higherOrderFn(callbackFn);

// Write a function that returns another function.
const returnFn = () => {
  console.log("retruning fn");
  const fnreturning = () => {
    console.log("this fn was returned");
  };
  return fnreturning;
};
returnFn()();

// Create a pure function for subtraction.
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 5));

// Create an impure function using global variable modification
let count = 0;
const increment = () => {
  count++;
  return count;
};
console.log(increment());
console.log(increment());
console.log(increment());
