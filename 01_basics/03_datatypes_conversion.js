//Investigation to check value conversion of mixed dt



let score = "40ab"

//two method to check datatype
//1)
console.log(typeof score);

//2)
console.log(typeof(score));
//value type is string 


//here we convert the value 
let valueInNumber = Number(score)


//now another variable hold its converted dt.
console.log(typeof valueInNumber)


//IMP point
/* as we got wrong input(i.e 40ab) in score and try to convert its type to number then it will show that its converted into number but when you check its value like shown below the value of converted dt is NaN(i.e Not a number ) */
console.log(valueInNumber)



//Another investigation for null dt coversion to number

let report = null

let new_type_report = Number(report)

//before changing dt
console.log(typeof report); //original dt of null is object  

//after changing dt
console.log(typeof new_type_report);  // shows dt converted to number

//and what it's value become
console.log(new_type_report)  //its value will be 0   


// Another investigation for undefined dt conversion to number

let final = undefined


let new_type_final = Number(final)

//before changing dt
console.log(typeof final); //original dt of null is object  

//after changing dt
console.log(typeof new_type_final);  // shows dt converted to number

//and what it's value become
console.log(new_type_final)  //its value will be Nan


// for boolean value true and false = 1 and 0


//Short summary
/*
"33" => 33
"33ab" => NaN
true => 1
false => 0
*/



//Investigation to check conversion from empty_string,string to boolean 
let isLoggedIn = ""

let boolenIsLoggedIn = Boolean(isLoggedIn)

console.log(boolenIsLoggedIn);  //false output

//Short Summary of conversion

/*
1 => true
0 => false
"" => false
"vivek" => true
*/


//Investigation of conversion from number to string 

let any_number = 60

let string_number = String(any_number)

console.log(string_number);  //after conversion exact same number shown as we put

console.log(typeof string_number)   //number converted to string 




