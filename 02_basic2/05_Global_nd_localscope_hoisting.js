// //In this session we gonna discuss about Scope and Gloval scope

// //the problem starts wiht these var declaration
// // let a = 10
// // const b = 20
// // var c = 30 // when we declare in var it stops the block scope which must be held in it, how we will learn below

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // {} - it's a scope, when this curly braces comes with any funciton, condition or object then that 
// //      area known as scope. 
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30 //or c = 30 also have block scope issue
// }
// /*
// all above item form starting curly br. to ending curly br. area called as block scope area 
// except that area called Global scope area.
// THE criteria is - value you declare in global scope could be accessible in block but vice versa shouldn't be possible.
// */

// // console.log(a);
// // console.log(b);
// console.log(c);    //var c gets output, but it shouldn't be execute it should have block scope


// //In let and const the block scope problem doesn't appear it helps to provide efficient and bug free programming.

// let x = 100
// if (true){
//     let x = 10
//     const y = 50
//     console.log("Inner value of x :",x)
// }

// console.log("Outer value of x :",x);
// // console.log(y);


// /* IMP Point
// It must be remember that when you use scope/core scope in browser console then it works differently 
// and when you use global scope in node environment it works differetly.
// */


// //In-depth of scope - Scope level and also dicuss mini hoisting also about closure(which should learn after DOM completed) 
// //  here we learn little bit about it 

// //checking scope nested func
// function one(){
//     const username = "Vivek"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

//     // console.log(website);
    
//     two()

// }
// one()
// //here closure means - child func can access parent func variables (it's just a basic answer.)


// //checking with another ex. how scope works in conditional statements.
// if (true) {
//     const username = "vivek"
//     if  (username == "vivek") {
//         const website = " youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);  //error
    
// }

// // console.log(username);  //error



//IMP 
//AN interesting concept further we'll discuss more about it basic gonna cover below
//called hoisting where it provide instructions and guideliness about declaration of variables and their execution
//how variables treated by js, how the js make tree where it stores variables etc.

console.log(addone(5)); //here code executes before initialization.

function addone(num){
    return num + 1
}



addtwo(5) //here get error says can't access before initialization, to understand this condition 
        // we have to learn about hoisting concept which explain this situation.
const addtwo = function(num) {
    return num + 2
}
