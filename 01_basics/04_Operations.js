//Just a recape of value coversion
//Should remember that when you type converion code first letter must be Capital of coverted dt (like String(num))

let any_num = 30;

//coversion
let to_string= String(any_num)

//orginial type of num
// console.log(any_num)
// console.log(typeof any_num)


// after coversion
// console.log(to_string)

// console.log(typeof to_string)


//JS reserved Keywords
/*
var    -  	Declares a variable
let	   -    Declares a block variable
const  - 	Declares a block constant
if	   -    Marks a block of statements to be executed on a condition
switch - 	Marks a block of statements to be executed in different cases
for	   -    Marks a block of statements to be executed in a loop
function - 	Declares a function
return -	E xits a function
try	   -    Implements error handling to a block of statements
*/


//*********************************Operations*********************************************************

let value = 5
let neg_value = -value
// console.log(value)


//Regular Operations

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2//2)
// console.log(2%2)


//concatenation
let str1 = "Hello"
let str2 = " Vivek"

let str3 = str1 + str2
// console.log(str3);


//Interesting concept   ***********************************************************************must learn about it

// console.log("1" + 2);   //12
// console.log(1 + "2");   //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //32
//result is depend on the first type of appearance

// console.log(+true);  //1
// console.log(+"");    //0

let num1, num2, num4;
num1 = num2 = num3 = 2 + 2

let game_counter = 100
game_counter++;     //will increase with 1
// or we can write like this
//++game_counter; 
console.log(game_counter);
//should learn about prefix and postfix opertors ************************************************ must learn about it
/* 
In prefix = the value will increase before the usage
In postfix = value will increase after usage 
A perfect example to understand that:
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

*/

