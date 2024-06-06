const accountId = 12345;
let accountEmail = "manthan@gmail.com";
var accountPassword = "12345";
accountCity = "ichalkaranji"; //

let accountState; // * the value undefined is assigned because no value is assigned
// * accountId = 549770;    Assignment to constant variable is not allowed;

accountEmail = "man@gmail.com"; //
accountPassword = "1235";
accountCity = "pune";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
