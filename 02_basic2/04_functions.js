//Functions 
/*
Functions in JavaScript are reusable blocks of code that perform a specific task. They are fundamental building blocks for organizing code, making it modular, and avoiding repetition. Functions are executed only when they are explicitly called or invoked. 
*/

//basic syntax
function sayMyName(){
    console.log("Vivek");
    
}
//exectuion
sayMyName()                     //refernce(execution)


//New func of Two num addition 
//result by console.log()
function add(num1, num2){                    //function funcName(parameters)
    console.log(num1 + num2);                 
}
 
const result = add(1,3)                   //funCall(arguments)   
//if put wrong input acc to coding js automatic treated acc to what is right for execution

console.log("result is :", result);  //result will be undefined cuz of 

//result by return
function add(num1, num2){                    //function funcName(parameters)
    // let result = num1 + num2 
    // return result           // after return execution nothiing will be called    
    // instead of that we can do like this
    return num1 + num2
}
 
const ans = add(1,4)
console.log("result", ans)



//Types of parameters we can pass

function loginUserMsg(username){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
        
    // }
    //or 
    if(!username){                 // exclamatory sign use as false
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//long way to call
// output = loginUserMsg("VIvk")
// console.log(output);

//short way
// console.log(loginUserMsg("VIVek"));

//if argument didn't pass checking username exists or not by if else method
console.log(loginUserMsg()); //if we didn't pass any argument then it returs undefined








