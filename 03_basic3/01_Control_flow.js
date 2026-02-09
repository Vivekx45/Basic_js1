//Now we have completed our foundational concepts from this section we
// start more concepts.

// Control Flow (Conditional statements)

//1) IF statement
const isUserLoggedIn = true
if (isUserLoggedIn){
    console.log("User logged in");
}

//Operators - >, <, >=, <=, ==, !=, ===

//2) IF-Else statement 
const temp = 30
if (temp < 40){
    console.log("Normal hot");
}
else{
    console.log("Too Hot!!");   
}


//short-hand (shouldn't write like this code)
const balance = 1000
// if (balance > 500) console.log("can buy!"),console.log("Can save");    //here we consider an implicit scope also shouldn't write like this 


// real life example - and confusion cleared

/* If you write two if statements back-to-back, JavaScript treats them as independent. Both will be checked,
   regardless of whether the first one was true.
*/
let score = 85;

if (score > 80) {
  console.log("Great job!"); // This runs
}

if (score > 70) {
  console.log("You passed!"); // This ALSO runs
}
// Use this when: Multiple conditions can be true at the same time, and you want to trigger
// an action for each one.


/*
 If you link them using else if, JavaScript treats them as a single group. As soon as it finds one true condition, it runs that block and skips everything
 else in that chain.
*/
let score2 = 85;

if (score2 > 80) {
  console.log("Great job!"); // This runs
} else if (score2 > 70) {
  console.log("You passed!"); // This is SKIPPED
} else {
  console.log("Try again.");  // This is SKIPPED
}
// Use this when: Only one outcome should happen. 
// (e.g., a student can't get both an 'A' and a 'B' grade).


//The "Dangling Else" Trap
//In your specific example if(){} if(){} else{}, the else only belongs to the second if

if (conditionA) { 
  // Runs if A is true
} 

if (conditionB) {
  // Runs if B is true
} else {
  // Runs ONLY if B is false (it doesn't care about A)
}

//As we know that we can compare multiple values with
/*
&& - and Op
|| - or Op
?? - Nullish Coalescing Op
Ternary Operator
*/

// example wiht NUllish Coalescing Op (IMP stuff to remember)
let val1;
//chooses one value btw them

// val1 = 5 ?? 10        //choose 5
// val1 = null ?? 10     //choose 10
// val1 = undefined ?? 15   //choose 15
val1 = null ?? 10 ?? 20  //chooses first value - 10


console.log(val1);


//Ternary Operator 
//Syntax - conditon ? true : false

//ex- 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




// 2nd Part

//Switch statement
// A switch statement is a cleaner alternative to long if...else if chains when you need to compare a 
// single value against multiple possible matches. 

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Yellow and curved.");
        break;
    case "apple":
        console.log("Crunchy and red."); // This runs
        break;
    case "Grapes":
        console.log("in small pieces and green colour");
        break;

    default:
        console.log("Unknown fruit.");
}

//other example

let month_num = 2

switch (month_num) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("febraury");
        break;
    case 3:
        console.log("march");
        break
    case 4:
        console.log("april");
        break
      
    default :
        console.log("OTHer month");

}
//imp point for interview
// break plays major here if didn't put break then code check every condition(except default) if a single 
// condition be true and executes rather code







