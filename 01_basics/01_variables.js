const account_id = 134
let account_email = "vivek@gmail.com"  
var account_passwords = "12345"
/*
var = which is used to declare variables is not considered to use in industry due to issue in block scope and functional scope

so from we gonna use
const and let often, but sometimes var can also be used

*/


accountcity = "Indore"
/*
as javascript is forgiving language so we can also declare variable without any declaration 
but we should declare like that 
*/


let account_balance
// we can also declare variables without assigning their values.var 

// account_id = 2   reassign can't be possible for const

account_email = "vt@gmail.com"
account_passwords = "54321"
accountcity = "Bhopal"

// console.log(account_email, account_passwords, accountcity);
console.table([account_id,account_email, account_passwords, accountcity,account_balance])

