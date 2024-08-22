//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 176
const scoreValue = 17878.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('145')
const anotherId = Symbol('145')

console.log(id === anotherId);

// const bigNumber = 9878775653445566776n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Perwez",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3