//Here we gonna learn about Loops(Iterations)
//Types - For loops, WHile loop, Do while loop

// For loop -A for loop is used to execute a block of code a specific, known number of times or to iterate
// over a sequence (such as a list, array, or string). It is ideal for situations requiring repeated, fixed-count actions,
// such as traversing data structures, counting, or running operations a set number of times. 


//syntax
/*
for(initialization;  condition; increment/ decrement) {
    //code to be execute on each iteration
}  
    */
//A general ex
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   //curly braces i.e block scope
    
// }

//1st ex
for (let i = 0; i < 10; i++) {
    const element = i ; 
    if (element == 5) {
        // console.log("5 is a number");
        
    }
    // console.log(element);
    
}
// console.log(element);   can't be accessible as we know that due to block scope

//nested for loops
//best to visualize, how NL works
for (let i = 0; i < 3; i++) {
    // console.log(`ITs a outer loop ${i}`);
    
    for(let j = 0; j < 5; j++) {
        // console.log(`for OUter loop value ${i}, inner loop value ${j}`);
    }
    
}

let myArray = ["Superman", "Batman", "Wonder woman", "Flash"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element, `at index ${i}`);
    
}


//Some keywords to use

//1) break - it simply used to break the control flow

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        break 
    }
    // console.log(`Value of i is ${index}`);
    
}

//2) continue - it will continue the iteration with excluding that specific iteration value
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue 
    }
    console.log(`Value of i is ${index}`);
    
}







