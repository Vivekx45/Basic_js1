
// This keywword


//this keyword - used to refer/get current context object variable declaration
const user = {
    username : "Vivek",
    cost : 999,

    welcome_message : function() {
        console.log(`${this.username} welcome to the website`);  
        console.log(this); //it executes current context for that declaration
        
    }
     
}

// user.welcome_message()
// user.username = "rk"  //here we changed the current context of that object 
// user.welcome_message()   //executes new context op

console.log(this);   //now in that single log execution it refers to an empty object, thus there is no context in global scope 
// here this shows empty object (i.e {}) in this node environment
// but in browser console environment it shows 'Window' object.

//interview que - what is most global object in browser console i.e 'window' object.


function chai(){
    let username = "Vivek"
    console.log(this.username);  // here this keyword isn't work in function it only works in object
    
}

// chai()  
//in any function execution of this keyword in node env. it provides a lot of detail to it.
// this keyword only works in objects


// const chai = function(){
//     let username = "vivek"
//     console.log(this.username);
// }  it will not execute also
// chai()

//Arrow function


//here in arrow function we also can't access this keyword
const chai = () => {
    let username = "vivek"
    console.log(this.username);
    
}
// chai()

//basic syntax of arrow func\
// () => {}

//normal ex/    
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(5,3));

//another method to execute arrow func as "Implicit return"

// const addNum = (x, y) => x + y     1st way to declare
const addNum = (x, y) => (x + y) //easier way to declare using paranthesis     
//in paranthesis no need to write 'return' unlike curly braces where you have to use 'return'

// console.log(addNum(5,4));

//Same arrow function as "Explicit return" - it used when you have to declare object in it.
const usrname = (a, b) => ({username: "Vivek"})   //here you need to use curly braces for bugfree execution.

console.log(usrname());





