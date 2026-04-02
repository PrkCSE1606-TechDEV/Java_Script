// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*
The reason is that an equality check == and comparison >, <, >= and
<= work differently.
Coparisons convert null to a number, treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false.
*/

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// All the 'null' and 'undefined' comparisions are always avoided as
// clean code is valued the most.

// ===

console.log("2"===2);
