const account_id = 123123
let account_email = "riyan@gmail.com"
var account_password = 21123
account_city = "lahore"
let account_state   // undefined data tpye

// account_id = 32 this is not allowed as it is a constant
console.log(account_id)

console.log(account_email)
account_email = "something@gmail.com"
// console.log(account_email)

console.log(account_password)
account_password = 2121
// console.log(account_password)

console.log(account_city)
account_city = "sommehitng"
// console.log(account_city)

// use console.table to print all the variables at once
console.table([account_id, account_email, account_password, account_city])