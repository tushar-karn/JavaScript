// the datatypes are catagorised in two Types Primitive and Non Premitive . on the basis of how data is stored in memory and how it is accessed is 

//  Primitive they are call by value and Non Primitive are call by reference

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "Tushar Karn", "Hitesh Choudhary"];
let myObj = {
    name: "Tushar Karn",
    age: 18,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3