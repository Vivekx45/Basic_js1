// Array 

//creation of array 1
let myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
console.log(typeof myArr); 

//creation 2
let myArr1 = new Array(1,2, 3, 4, 5, true, "str"); //can have multiple types of dt's
console.log(myArr1);
//console.log(myArr.length) // to get length of array but this is not method

//- points about array
// javascript array are resizable can have more elements afterwards
// accessing elements by indexing
// in js array provide shallow copy i.e pointout at same reference point
/*
 shallow copy - point out at same refernce point so when you make changes on copy the
                original one have same changes
 deep copy - vice versa                
*/

// Array methods 

const arr = [0, 1, 2, 3, 4, 5]

//push, pop
console.log(arr.push(100)) // appends new element at last and return new length of array
console.log(arr.pop());  // delete the last element and returns it 

//unshift,shift
console.log(arr.unshift(3)) // just like push but at 0th idx of array not recommended to use
console.log(arr.shift())    // delete first element and shifts all

//includes, indexOf
console.log(arr.includes(2))  // check specified value held or not return true/false
console.log(arr.indexOf(3))  //check which element at specified idx, if idx not available (-1)


imp stuff 

const oldArr = [0, 1, 2, 3, 4, 5]
const newOne = oldArr.join()

console.log(oldArr)    
console.log(typeof newOne) //you'll notice the dt of newOne will change to string after joining oldArr



//slice and splice
oldArr = [0, 1, 2, 3, 4, 5]
console.log("A ", oldArr);

const myn1 = oldArr.slice(1,3);
// it works as simple slice
console.log(myn1)
console.log("B ", oldArr)


/*
in splice method it slices you specified slice wiht including exclusive value also it 
removes those specified elements from original array
*/
const myn2 = oldArr.splice(1,3)
console.log("C ", oldArr)
console.log(myn2)



//Part-2 

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "aqua"]

// marvel.push(dc)  // it doesn't merge array instead it adds whole array as single array element
// console.log(marvel);   
// console.log(marvel[3]);

// instead of using push we can use concat method
const all_hero = marvel.concat(dc);
console.log(all_hero)

//so concat also often used to merge array instead of that use "spread" operator
const all_new_heroes = [...marvel, ...dc]
console.log(all_new_heroes);


// to cope confused array 
const new_arr = [1, 2, 3, [4, 5, 6], 7, [5, 6, 8, [54, 45, 56]]]

//to cope this confusing array we can use flat method 
//it will turn whole array into single array
const real_arr = new_arr.flat(Infinity);  //can pass the depth (1,2 3,Infinity) not recommended to put Infinity should declare actual depth
console.log(real_arr);


/* sometimes we got data from webpage is in string, object etc format if we need that
   data in array format we can convert that like DT.from(taken_Data) 
*/
console.log(Array.isArray("VIvek"))

console.log(Array.from("Vivek")) //will convert whole data into array format
//if this method got invalid input it will return empty array just like shown below 
console.log(Array.from({name: "vivek"}));


//to convert multiple values into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
























