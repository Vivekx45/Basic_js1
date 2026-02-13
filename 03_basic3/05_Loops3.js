// High ORder Array Loops - Higher-order array loops (methods) are used to write cleaner, more readable, and more declarative code 
// by abstracting common data processing patterns like transforming, filtering, and accumulating array elements. 
// They promote a functional programming style and make code more reusable and modular. 

//Array loops are the most useful part of programming due we have to fetch most of the data
//from arrays often.


// for-of loop (array specific loop) - kindly similar to python for loop

const arr= [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}
//to print specific string
const greetings = "Greetings!!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Another an INteresting concept - MAP
// Maps - it's a object which holds key-value pair also remembers the order of pairs unlike objects.
// doesn't hold duplicate values -doesn't show error but doesn't repeat it when execute
// also stays in order

const map = new Map()
map.set('IN', "INdia")
map.set('USA', "UNited states of america")
map.set('Jp', "Japan")
map.set('IN', "INdia") //doesn't print


// console.log(map);

// for-of loop on Map
//by destructing for-of 
for (const [key,value] of map) {
    // console.log(key, '-', value);
}

//Can for-of loop on Objects - No , show an error can't be possible on objects
//there are different ways to iterate objects we will learn later
const myObj = {
    'Game1' : "GOd of war",
    "Game2" : "Gta 5"
}

for (const [key,value] of myObj) {
    // console.log(key, '-', value);

}


















