// Type Conversion & Coercion

// Convert the string "50" into a number.
const strval = "50";
const convertedstrval = Number(strval);
console.log(typeof convertedstrval);

// Convert the number 100 into a string.
const numval = 100;
const convetstr = String(numval);
console.log(typeof convetstr);

// convert true into boolean
const str = "true";
const bool = str === "true";
console.log(typeof bool);

// Check the output of:
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

// Create a variable with value "123abc" and convert it into a number.
const testvar = "123abc";
const convertednumval = Number(testvar);
console.log(convertednumval);

// Use parseInt() on "500px".
const value = "500px";
const result = parseInt(value);
console.log(result);
