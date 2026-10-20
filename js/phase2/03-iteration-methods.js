// forEach
let nums = [1, 2, 3,4];

nums.forEach(function(n) {
    console.log(n*2);  
})

// with arrow fn
// nums.forEach((n)=> console.log(n*2))


let tripledVal = nums.map((n) => n*3)
console.log("tripledVal is ",tripledVal);

// filter 
let evens = nums.filter(n => n%2===0)
console.log("even are", evens);


// reduce 
let sum =  nums.reduce((acc,n) => acc+n, 0)
console.log(sum);

// find
let users = [{name: "A", age: 20}, {name: "B", age: 10}];
let user = users.find(u => u.age <12)
console.log(user);


// findIndex 
let idx = users.findIndex(u => u.age<18)
console.log(idx);


// some 
console.log(nums.some(n => n > 2));   // true
console.log(nums.some(n => n > 10));  // false

// every
console.log(nums.every(n => n > 0));   // true
console.log(nums.every(n => n > 2));   // false



// Array Destructuring
// Old way
let a = nums[0];
let b = nums[1];

// New way
let [x, y, z] = nums;
console.log(x, y, z);   


// Spread and Rest with Arrays
let numsw = [1, 2, 3];
let more = [0, ...numsw, 4];
console.log("more is", more);


// Rest 
function sumofnum(...numsw) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sumofnum(1, 2, 3, 4));   


// // **Rule of thumb:**
// - `...` on the **right side** of `=` or in a function call → **spread** (expands).
// - `...` on the **left side** of `=` or in a parameter list → **rest** (collects).


// Multi-Dimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);   // 6 (row 1, column 2)

for (let row of matrix) {
    for (let val of row) {
        console.log(val);
    }
}