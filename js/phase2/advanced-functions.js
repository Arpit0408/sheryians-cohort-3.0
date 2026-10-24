// Advanced Functions

// Write a recursive function for factorial.
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

//Write recursive Fibonacci function.
const fib = (val) => {
  if (val = 1) return val;
  return fib(val - 1) + fib(val - 2);
};

console.log(fib(6));
