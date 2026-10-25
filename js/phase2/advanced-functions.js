// Advanced Functions

// Write a recursive function for factorial.
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

//Write recursive Fibonacci function.
const fib = (val) => {
  if (val <= 1) return val;
  return fib(val - 1) + fib(val - 2);
};
console.log(fib(6));

// Create an IIFE that prints "Executed".
const iffeFn = () =>{
  console.log("Executed");  
}
iffeFn();

// Write a function that memoizes factorial calculation.
const memoizeFn = (fn) => {
  let cache = {};
  return function(n) {
    if (n in cache) {
      console.log(`${n} fetched from cache`);
      return cache[n];
    }
    console.log("calculating fresh ans");
    let result = fn(n);
    cache[n] = result;
    return result;
  };
};

const memoized = memoizedFactorial = memoizeFn(factorial);
console.log(memoized(5));
console.log(memoized(5));


// Create a closure counter function.
function counterunction (){
let count =0;
function increaseCount () {
count++;
console.log(count);

}
return increaseCount
}
const myfn = counterunction();
myfn()
myfn()

// Write a function currying example for addition.
function curryingJs (a){
  return function (b){
return function(c){
  return a+b+c
}
  }
}
console.log(curryingJs(1)(2)(3));

function curryFn (fn){
  return function curied(...args){
    if (args.length >= fn.length) {
      return fn(...args);
    }
    else{
      return function(...nextArgs) {
        return curied(...args, ...nextArgs);
      };
    }
  }
}
function sum(a, b, c, d) {
  return a + b + c + d;
}
const currySum = curryFn(sum);
console.log(currySum(1)(2)(3)(4));


// Create debounce function logic.
const debounceFn = (fn, delay) =>{
  let timer;
  return function (...args){
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

const printMessage = debounceFn((string) => {
  console.log(string);
}, 2000);

printMessage("as")
printMessage("f")
printMessage("g")
printMessage("h")
printMessage("h")
printMessage("jasbjfklkerjhwegfr")


// Create throttle function logic.
function throttle(fn, delay) {
  let lastTime = 0; // 1. Track rakhega pichli call ka time

  return function (...args) {
    let now = Date.now(); // 2. Abhi ka exact time lo

    // 3. Check karo kya delay ka time beet gaya hai?
    if (now - lastTime >= delay) {
      lastTime = now; // 4. Last time ko update kar do
      fn(...args);    // 5. Function ko run kar do
    }
  };
}
const handleScroll = throttle(() => {
  console.log("Scrolled event fired! 🚀");
}, 2000);


// Write a function that executes only once.
function once(fn) {
  let called = false
  return function (...args){
   if (!called) {
    called = true
    return fn(...args)
   }
  }
}

const greet = once(()=>{
  console.log("hello ");
  
})
greet();
greet();


// Create custom implementation of map.
const arr= [1,12,3,4]
function customMap(fn, array){
 let newArray = [];
 for (let i = 0; i < array.length; i++) {
  newArray.push(fn(array[i]))
 }
 return newArray
}

console.log(customMap((a)=>{
arrayvalue = a+1;
return arrayvalue
},arr));


// Create custom implementation of filter.
function customFilter (fn, array){
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(fn(array[i])) newArray.push(array[i])
  }
  return newArray
}

console.log(customFilter((val) =>{
 if (val>3) {
  return val
 }
},arr));

// Create custom implementation of reduce.
const customReduce = (fn, array)=>{
  let sum =0;
  for (let i = 0; i < array.length; i++) {
  sum= fn(sum, array[i])
  }
  return sum
}
console.log(customReduce((sum, val) =>{
  return sum+=val
},arr));


// Create custom forEach.
function customForEach(fn, array) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

customForEach((val) => {
  console.log(val * 2);
}, arr);


function test() {
    return;
    console.log("Hello");
}
// console.log(test());    yha return ki wjh se undefined printhoga kyunki khli retun ho rha h koi va;lue nhi h 