// Javascript is dynamically typed language

/*
Statically typed languages check data types at compile-time, requiring explicit type declarations (like Java, C++) for early error detection, better performance, and code clarity, while dynamically typed languages check types at runtime, allowing flexible, implicit type assignment (like Python, JavaScript) but potentially catching errors later during execution
*/

// Datatype are of basically 2 types :-
//1) Primitive datatypes
/*
String, Number, Boolean, null, undefined, Symbol, BigInt 
*/

/*
type_Define var_name = value  datatype
*/

//Number
const num = 100 //number
const num_1 = 100.9 //number
console.log(typeof num)  //Number

//Boolean
const isLoggedIn = false
console.log(typeof isLoggedIn)   //Boolean

//null
const Outside_temp = null
console.log(typeof Outside_temp)  //Object
//undefined
let undfnd_val;

//symbol
//both var have save values but treated differently bcz of Symbol dt i.e provide unique value
const id = Symbol("xyz")  
const another_id = Symbol('xyz')

console.log(typeof id)  //Symbol
//checking
console.log(id == another_id);


//BigInt
const big_num = 235462346346234623463468790989898n    //adding n at the end defined that its type is BigInt
console.log(typeof big_num);   //bigint




//2) Reference type (Non-Primitive datatypes)
/*
Array, Objects, Functions
*/

//Array
const avengers = ["Iron man", "thor", "Hulk", "Captain"]

console.log(typeof avengers);   //object


//Object
let myobj = {
    name: "Vivek",
    age : 20,
    height : "179cm", 

}

console.log(typeof Veggies_color);   //undefined


//Function

const my_func = function(){
    console.log("It's my function");
    
} 

console.log(typeof my_func);   //function dt



