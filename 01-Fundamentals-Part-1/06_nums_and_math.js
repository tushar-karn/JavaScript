const score = 400
// console.log(score);

const newScore = new Number(400);
console.log(newScore , typeof newScore);

console.log(newScore.toString().length);
console.log(newScore.toFixed(2));

const newNumber = new Number(123.789);
console.log(newNumber.toPrecision(3));
console.log(newNumber.toPrecision(5));

const incomeTax = 1000000;
console.log(incomeTax.toLocaleString());
console.log(incomeTax.toLocaleString("en-IN"));



// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));



console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)