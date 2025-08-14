let lastName = "Doe";
let firstName = "James";

// console.log(firstName, lastName, age);

let age = 19;

console.log(firstName, lastName, age);

// Values are stored on the stack
const name = "John";
const ages = 30;

console.log(name, ages);

// Reference
const person = {
  name: "Brad",
  age: 40,
};

let newName = name;
console.log(name, newName);

// making the first letter of a string capitaliz

const myString = "developer";
console.log(myString);
let newmyString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(newmyString);

let x, y;
y = Math.abs(-5);
x = Math.round(4.5);
x = Math.ceil(5.6);

console.log(x);
console.log(y);
