//Part - 3

//Another concept - truthy value and falsy value

const userEmail = "v@gmail.com"
//here we didn't check any condition this it is considered as truthy value so if var hold empty string 
// then it becomes false statement
if (userEmail) {
    console.log("USer got Email");
    
}   else {
    console.log("Don't have user Email");
}

//Here are some rules of truthy and falsy values must remember it.

// Falsy Values : false, 0, -0, BigInt(0n), "", null, undefined, NaN

// Truthy Values : "0", 'false', " ", [], {}, function(){}  empty func, 


// to check array 
const userEmailId = []

if (userEmailId.length === 0) {
    console.log("Array is empty");
}

// to check empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");   
}

//Important concepts - for competitive prog.
false == 0 //OP - true
false == "" // OP - true
0 == '' //OP - true


