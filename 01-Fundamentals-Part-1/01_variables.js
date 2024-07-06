const accountId = 123456789;

let accountEmail = "Tushar@gmail.com";
var accountPassword = "password123";
accountCity = "Mumbai";


// accountId = 2; // not allowed because it is a constant variable
console.log(accountId);

accountEmail = "a@gmail.com";
// console.log(accountEmail);
accountPassword = "password1234";
accountCity = "Delhi";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);


