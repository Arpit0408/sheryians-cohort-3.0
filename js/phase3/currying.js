// multiply
function multiply(a) {
    return function (b) {
        return function (c) {
            console.log(a * b * c);
        }
    }
}
multiply(5)(3)(4)
multiply(10)(2)(5)

// greetig fn
function greet(greeting) {
    return function (name) {
        return `${greeting} ${name}`
    }
}
console.log(greet("Hello")("Rahul"));


// ordering pizza
function OrderPizza(size) {
    return function (toppings) {
        return function (address) {
            return `Your ${size}-sized pizza with extra ${toppings} has been delivered at ${address}`
        }
    }
}

console.log(OrderPizza("large")("cheese")("Kanpur"));

// create Mesaage
function createMessage(greet) {
    return function (name) {
        return function (Mesaage) {
            return `${greet} ${name}, ${Mesaage}`
        }
    }
}

createMessage("Hello")("Rahul")("Good Morning")

// execution flow explanation = createMessage ek higherorder fn h jo ki ek or higherorder fn retrun krta h jb createMessage("Hello") call hota h to "Hello" call k throgh memory m preserve ho jati h . ab next jb returned anonmous call hota h function (name) to ska name bhi memory k though preserve ho jata h and ye bhi ek function return krta h uss function m hamar message print hota h with preserved values


function add(...a) {
    let value = a.reduce((acc, curr) => acc + curr, 0);

    function sum(...s) {
        if (s.length === 0) {
            return value;
        }

        value += s.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
    return sum;

}

console.log(add(1)(2, 3)(4)(5, 6, 7)()); // 90