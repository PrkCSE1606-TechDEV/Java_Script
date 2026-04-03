// Primitive

// 7 types: Srings, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let usereEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1234567890987456321n

// Reference (non primitive)

// Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]; // => Arrays
let myObj = {                                   // => Objects
    name: "Priyanshu",
    age: 22,
}

// Function
const myfunction = function(){
    console.log("Hello World"); // => Declaring Function
    
} 

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof anotherId);

// Read about Typeof Operators from link: https://262.ecma-international.org/5.1/#sec-11.4.3