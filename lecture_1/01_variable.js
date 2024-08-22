const accountId = 144553674564378
let accountEmail = "Perwez957"
var accountPassword = "Pfytfyscv"
accountCity = "Dechi"
let accountState;  // it will give the output *** undefined*** Here i have declare the variable but no value is assigned 

// accountId = 2 // not allowed --->>> Becouse account declared as a const so we cant change the value of the variable 


accountEmail = "gyttyef.com"  // here we are changing the value of the variable and assing the new value 
accountPassword = "254694346"
accountCity = "dhanbaad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])