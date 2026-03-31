const accountId = 144563
let accountEmail = "priyanshu123@git.com"
var accountPassword = "23456"
accountCity = "Bhagalpur"
let accountState;

// accountId = 2 // not allowed 


accountEmail = "prk@git.com"
accountPassword = "2245"
accountCity = "Patna"

console.log(accountId); 

/*
Prefer not to use var. 
Beacause of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])