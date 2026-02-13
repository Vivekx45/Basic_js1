// For-in Loop -can be used to iterate on objects, not specifically also used for another tasks
// The for-in loop is primarily used to iterate over the property names (keys) of an object, including properties inherited through
// the prototype chain. Its main purpose is inspecting object properties, not iterating over sequential collections like arrays. 
const Obj = {
    js : "javascript",
    py : "python",
    cpp : "c++",
    swift : "Swift by Google"
}

for (const key in Obj) {
    // console.log(key); //for only keys
    // console.log(Obj[key]);  //for Object values
    // console.log(`${key} for language : ${Obj[key]}`);  //for key value pair
} 

// can we use for-in loop In Arrays

const arre = ['js', 'py', 'cpp', 'java']

for (const key in arre) {
    // console.log(key);  //it will print only keys not values like for-of loop   
    // console.log(arre[key]);
    
}



// Most useful loop - FOr-each Loop -A foreach loop is a control flow statement used to easily iterate through 
// all elements in a collection (like arrays, lists, or dictionaries) without needing to manually manage an index or counter variable. 
// This results in cleaner, more readable, and less error-prone code, particularly for read-only operations. 
//this loop we gonna use a lot cuz
//It's a higher order function
 
const coding = ['js', 'java', 'python', 'cpp', 'Html']

// coding.forEach( function (item) {
//     console.log(item);    
// })
//in that loop no need to use function name, also it smart-enough to get value of specified array


//here we can also use arrow function

// coding.forEach( (value) => {
//     console.log(value);    
// } )   //same works as normal function


//Make it more interesting 

// function printMe(execute) {
//     console.log(execute);
    
// }
// coding.forEach(printMe)   //here must remember that only declare reference not execution'()'


//another interesting way to callback
//it has more parameter like index, whole arr access
// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
    
// })


//A scenario where we have to use multiple objects in a single array, here we iterate on it.
// [{}, {}, {}]

const mycoding = [
    {
        languageName : "javascript",
        languagaeFileName : "js"
    },
    {
        languageName : "Python",
        languagaeFileName : "py"
    },
    {
        languageName : "HTml",
        languagaeFileName : "html"
    }
]   // here each value is an object

// here can access complex objects in array such easy way wth of ForEach loops.
mycoding.forEach( (item) => {
    
    console.log(item.languageName);
    // console.log(item.languagaeFileName);
    
})