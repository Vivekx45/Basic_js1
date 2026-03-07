// While Loop -A while loop is primarily used in programming to repeatedly execute a block of code 
// when the number of iterations is unknown in advance, and the repetition should continue as long as a specified condition
// remains true. 

// syntax
/* initialization
while (condition) {
    code to execute one each iteration
    
    increment/decrement
}
    */

// A simple ex

let i = 0 
while (i < 10) {
    // console.log(`INdex : ${i}`);
    i++;
}

//ANother ex
let arr = ["a", 'b', 'c', 'd', 'e']

let idx = 0
while (idx < arr.length) {
    console.log(`alphabet : ${arr[idx]}`);
    idx += 1
}

//Same here we can do nesting 


// Do-WHile Loop -A do-while loop is used when you need to ensure that a block of code executes at least once, 
// regardless of whether the loop's condition is initially true or false. The condition is checked after the loop body runs,
// which is the key difference from a standard while or for loop. 

// syntax



// an easy ex
let score = 1 
do {
    console.log(`SCore is ${score}`);
    score ++
} while (score <= 10);

// an best thing of do while loop

//here 11 will execute if it's doesn't match the condition due to nature of DW loop
let scores = 11
do {
    console.log(`SCore is ${scores}`);
    scores++
} while (scores <= 10);