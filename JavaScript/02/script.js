let x, y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

let sumOutput = x + y;
const sumout = `${x} + ${y} = ${sumOutput}`;
console.log(sumout);

// difference
let difference = x - y;
const differenceout = `${x} + ${y} = ${difference}`;
console.log(differenceout);

// productOutput
let productOutput = x * y;
const productOut = `${x} * ${y} = ${productOutput}`;
console.log(productOut);

// quotientOutput
let quotientOutput = x / y;
const quotientOut = `${x} / ${y} = ${quotientOutput}`;
console.log(quotientOut);

// remainder
let remainder = x % y;
const remaindout = `${x} % ${y} = ${remainder}`;
console.log(remaindout);

let date = new Date();
let time = date.getFullYear();
console.log(time);
// console.log(date);
