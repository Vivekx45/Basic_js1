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
    
    // console.log(item.languageName);
    // console.log(item.languagaeFileName);
    
})





// SHown in NExt Vid Filter map waaali
// SOmething conciously missed about ForEach loop

const codings = ['js', 'java', 'python', 'cpp', 'Html']

const values = codings.forEach( (items) => {
    // console.log(items);
    // return items
    
})    //got undefined with log, return 

// console.log(values);   //its execution also got undefined
// Conclusion is For each loop doesnt return anything.
// So what we do on other tasks which requires return, for that we do like shown below.


// for that return issue we use .filter operation
// uses a lot
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (num) => num > 4 )  //it returns values so require to store in var
//or we can write like this 
const newNums = nums.filter( (num) => {
    return num > 4                                // if you specify scope in arrow func you have to use return for output
} )

// console.log(newNums);


//If you don't wanna use filter op. or cope that situation wiht ForEach loop 

const Storage = []

nums.forEach( (num) => {
    if (num > 4) {
        Storage.push(num)
    }
})

// console.log(Storage);



// A real world example of fetching data / You can save as a project.

//The dataset of Books of different genre with different publish time
const books = [
    { title: 'Book One', genre: "Fictional", publish: 1999, edition: 2012 },
    { title: 'Book Two', genre: "Non-Fictional", publish: 1990, edition: 2005 },
    { title: 'Book Three', genre: "History", publish: 1996, edition: 2024 },
    { title: 'Book Four', genre: "Science", publish: 1993, edition: 2019 },
    { title: 'Book Five', genre: "History", publish: 1989, edition: 2004 },
    { title: 'Book Six', genre: "Non-Fictional", publish: 1999, edition: 2012 },
    { title: 'Book Seven', genre: "Fictional", publish: 1990, edition: 2010 },
    { title: 'Book Eight', genre: "History", publish: 1991, edition: 2012 },
    { title: 'Book Nine', genre: "Fictional", publish: 1997, edition: 2008 },
    { title: 'Book Ten', genre: "Science", publish: 1993, edition: 2005 },
    { title: 'Book Eleven', genre: "History", publish: 1990, edition: 2007 },
]

//1st fetch - getting books having History related data.
const getBooks = books.filter( (bk) => bk.genre === 'History')

//2nd fetch - getting books which got published after 1995 also from History genre
// const getByPublish = books.filter( (Ed) => {return Ed.publish >= 1995}) //if uses scope must add return call
const getByPublish = books.filter( (Ed) => Ed.publish >= 1995 && Ed.genre === 'Fictional')

// console.log(getBooks);//for 1st fetch
console.log(getByPublish);//for 2nd fetch

//Hence filter op. eases to fetch data from given datasheets








