let score = "Priyanshu"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/
let isLoggedIn = "Priyanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/* 
1 => true; 0 => false
"Priyanshu" => true
*/

/*
let someNumber = 23

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); 

*/

/******************* Operations **********************/

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 = " Priyanshu"

let str3 = str1+str2
//console.log(str3);

//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+2); // If String is first element then all the rest will be treated as a String. 
//console.log(1+2+"2"); // If the last element is a String then first the operation will happen and then the string will get attached to it.

//console.log((3+4)*5%3);

//console.log(true); // => Possible
//console.log(+true); // => Possible
// console.log(true+); => Not Possible
//console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2 // There is no consistency in this code. It's a bit confusing.

let gameCounter = 100
// gameCounter++; OR => PostFix Operator (Value increases after usage)
++gameCounter; // => PreFix Operator (Value increases before usage)
console.log(gameCounter);

/* 
Read About PreFix and PostFix from the link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

Also Read About "Abstract Operation from ECMA", link: https://tc39.es/ecma262/#sec-abstract-operations
*/