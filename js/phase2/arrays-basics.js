// Create an array of 5 fruits.
const fruitsArray = ["apple", "mango", "guava", "banana", "orange"];

// Print first and last element of array.
for (let i = 0; i < fruitsArray.length; i++) {
   if (i ===0 || i === fruitsArray.length-1) {
    console.log(fruitsArray[i]);
   } 
}

// Find length of array.
console.log(fruitsArray.length);

// Add element at end using push.
fruitsArray.push("kiwi")
console.log("using push", fruitsArray);

// Remove last element using pop.
fruitsArray.pop();
console.log("using pop", fruitsArray);

// Add element at beginning using unshift.
fruitsArray.unshift("papaya")
console.log("using unshift", fruitsArray);

// Remove first element using shift.
fruitsArray.shift();
console.log("using shift", fruitsArray);

// Reverse an array.
 let newFruits = []
for (let i = fruitsArray.length-1; i >= 0; i--) {
   newFruits.push(fruitsArray[i])
}
console.log(newFruits);

const arr = [7, 2, 9, 1, 5, 12, 3, 8, 4, 10];
for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {
   if (arr[i]>arr[j]) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
   }
   }
}
console.log(arr);


const arr2= [2,43,5,1,67]
for (let i = 0; i < arr2.length; i++) {
   for (let j = i+1; j < arr2.length; j++) {
   if (arr2[i]<arr2[j]) {
    let temp = arr2[i]
    arr2[i] = arr2[j]
    arr2[j] = temp
   }
   }
}
console.log(arr2);

