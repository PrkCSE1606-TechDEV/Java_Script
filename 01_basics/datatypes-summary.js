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

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myfunction);
// console.log(typeof heros);
// console.log(typeof anotherId);

// Read about Typeof Operators from link: https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => We get a copy of declared variable,
// Heap (Non-Primitive) => It happens when a memory is defined under heap
//                           We get the reference of original value.

let myYouTubename = "Priyanshu_1606"

let anothername = myYouTubename
anothername = "Priyanshu_1610"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "priyanshu@google.com" //=> All the properties of the Object like email, upi are accessed by putting a dot(.) before it.

console.log(userOne.email);
console.log(userTwo.email);

// Read MS Word file JavaScript in IMportant Pdf's Section.