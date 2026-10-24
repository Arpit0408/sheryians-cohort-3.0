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
