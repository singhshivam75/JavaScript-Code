const accountId = 144553
let accountEmail ="shivam87@gmail.com"
var accountPassward = "12345" // don't use
accountCity = "Jaipur" // this is not correct way
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassward = "889465654"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassward, accountCity, accountId, accountState]);