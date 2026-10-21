// creating objects
let person = {
  name: "Aman",
  age: 25,
  city: "Bhopal",
  isStudent: true,
};
console.log(person);

//Accessing Properties

// Dot notation
console.log(person.name);

// bracket notaion
console.log(person["name"]);

// Adding, Updating, Deleting Properties
// Add
person.city = "kanpur";
person["country"] = "India";

// Update
person.age = 26;

// Delete
delete person.city;

console.log(person);
// { name: "Aman", age: 26, country: "India" }

// Methods — Functions
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));

// Shorthand method syntax (ES6)
let calculator2 = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

// The this Keyword
let person2 = {
  name: "Akash",
  greet() {
    console.log("Hello, I am " + this.name);
  },
};
person2.greet();

// Nested Objects
let user2 = {
  name: "Ajay",
  address: {
    city: "Kanpur",
    state: "Uttar Pradesh",
    pinCode: 208017,
  },
  hobbies: ["gaming", "coding"],
};
console.log(user2.address.city);
console.log(user2.hobbies[0]);

// Object Destructuring
let { name, age } = person;
console.log(name, age);

let { name: fullName, age: years } = person;
console.log(fullName, years); // "Aman" 25

let { name: isname, country = "Australia" } = person;
console.log(country);
let {
  address: { city },
} = user2;
console.log(city);

// Spread with Objects

// Copy
let copy = { ...person };

// Combine
let extra = { city: "Bhopal", country: "India" };
let combined = { ...person, ...extra };
// { name: "Aman", age: 25, city: "Bhopal", country: "India" }

// Override
let updated = { ...person, age: 26 };
// { name: "Aman", age: 26 }

// jb keys chahiye ho kisi obj ki
console.log(Object.keys(person));
// for values
console.log(Object.values(person));
// for key value both
console.log(Object.entries(person));

// Object.entries is especially useful with array iteration methods
Object.entries(person).forEach(([key, value]) =>
  console.log(`${key} ki value hai: ${value}`),
);

// Object.assign — Merge objects (older syntax)
let merged = Object.assign({}, person, extra);

console.log(merged);

let frozen = Object.freeze({ name: "Aman" });
frozen.name = "Raj"; // silently fails (or throws in strict mode)
console.log(frozen.name); // "Aman"

let sealed = Object.seal({ name: "Aman" });
sealed.name = "Raj"; //  can modify existing
sealed.age = 25; //  cannot add new properties

// Looping Through Objects
// for...in loop
for (let key in person) {
  console.log("person key is", key, ":", person[key]);
}

// Object.keys with forEach
Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

// Object.entries with destructuring (cleanest)
for (let [key, value] of Object.entries(person)) {
  console.log("using obj.entries with descrturing", key, ":", value);
}
