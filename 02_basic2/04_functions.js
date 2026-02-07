// //Functions 
// /*
// Functions in JavaScript are reusable blocks of code that perform a specific task. They are fundamental building blocks for organizing code, making it modular, and avoiding repetition. Functions are executed only when they are explicitly called or invoked. 
// */

// //basic syntax
// function sayMyName(){
//     console.log("Vivek");
    
// }
// //exectuion
// sayMyName()                     //refernce(execution)


// //New func of Two num addition 
// //result by console.log()
// function add(num1, num2){                    //function funcName(parameters)
//     console.log(num1 + num2);                 
// }
 
// const result = add(1,3)                   //funCall(arguments)   
// //if put wrong input acc to coding js automatic treated acc to what is right for execution

// console.log("result is :", result);  //result will be undefined cuz of 

// //result by return
// function add(num1, num2){                    //function funcName(parameters)
//     // let result = num1 + num2 
//     // return result           // after return execution nothiing will be called    
//     // instead of that we can do like this
//     return num1 + num2
// }
 
// const ans = add(1,4)
// console.log("result", ans)



// //Types of parameters we can pass

// function loginUserMsg(username){
//     // if(username === undefined){
//     //     console.log("please enter a username");
//     //     return
        
//     // }
//     //or 
//     if(!username){                 // exclamatory sign use as false i.e as undefined bcz undefined signs as false
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// //long way to call
// // output = loginUserMsg("VIvk")
// // console.log(output);

// //short way
// // console.log(loginUserMsg("VIVek"));

// //if argument didn't pass checking username exists or not by if else method
// console.log(loginUserMsg()); //if we didn't pass any argument then it returs undefined




//Part-2  functions with objects and array 


//how can we pass more types of parameters in function
//while project development we face some situation of shopping cart, where user put acc to their needed items
//so we have to prepare our para's for that

function calc_cart_price(...item){
    return item
}

console.log(calc_cart_price(5,10,200))   //if you get multiple items in a single args to cope that we have rest operator/spread operator(i.e ...)
// ...(rest op/spread op) - //o/p got in array, used to get multiple items in a single var


//an interview ques.
function calc_cart_price(it1, it2, ...items){
    return items
}

console.log(calc_cart_price(5,10,200,300))
//here interviewer ask which args gonna held in '...items' para.



//objects in func

const user = {
    username : "Vivek",
    price : 500
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObj(user)
/*
sometimes we got problems in cross-check of variables (like we type prices instead of price in function redeclaration)
thus got undefined in output to cope that situation we use some methods 
shown below
*/

//1 method - direct object passage on execution
handleObj({
    username : "ak",
    price : 400
})

//2 method - we can also pass array on it
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))  //from usage of any array that function will pass second value of every array

