let fruits = ["apple", "banana", "mango"];
let numbers= [1,2,3,4,5]
let mixed = [1,2,"mango", "banana", true, null, false]
let empty = []



// constructor method for creating an array
// let fruits = new Array("apple", "banana", "mango"); // Yeh constructor syntax hai


//  Accessing Elements (Zero-Indexed)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits[fruits.length - 1]);   
console.log(fruits.at(-1));               


// Array length
let arr = [10, 20, 30, 40];
console.log(arr.length);


// Mutating Methods (Change the Original Array)

arr.push(5);
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(45);
console.log(arr);
arr.shift()
console.log(arr);
arr.reverse()
console.log(arr);
arr.splice(1, 2, 2,3,4,5)
console.log(arr);
arr.sort((a, b) => a - b);console.log(arr);

