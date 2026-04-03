const name = "Priyanshu"
const repoCount = 50

// console.log(name + repoCount + " Value"); => Outdated Syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaring a String
const gameName = new String('Priyanshu-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__ );

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 7)
console.log(anotherString);
// Read about 'slice' from link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


const newStringOne = "   Priyanshu   "
console.log(newStringOne);
console.log(newStringOne.trim());
// read about 'trim' from link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://priyanshu.com/priyanshu%20kumar"

console.log(url.replace('%20', '-'));

// console.log(url.includes('Priyanshu'));
console.log(url.includes('priyanshu'));

console.log(gameName.split);
