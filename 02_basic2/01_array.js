// Array 

// //creation of array 1
// let myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(typeof myArr); 

// //creation 2
// let myArr1 = new Array(1,2, 3, 4, 5, true, "str"); //can have multiple types of dt's
// console.log(myArr1);
// //console.log(myArr.length) // to get length of array but this is not method

// //- points about array
// // javascript array are resizable can have more elements afterwards
// // accessing elements by indexing
// // in js array provide shallow copy i.e pointout at same reference point
// /*
//  shallow copy - point out at same refernce point so when you make changes on copy the
//                 original one have same changes
//  deep copy - vice versa                
// */

// // Array methods 

// const arr = [0, 1, 2, 3, 4, 5]

// //push, pop
// console.log(arr.push(100)) // appends new element at last and return new length of array
// console.log(arr.pop());  // delete the last element and returns it 

// //unshift,shift
// console.log(arr.unshift(3)) // just like push but at 0th idx of array not recommended to use
// console.log(arr.shift())    // delete first element and shifts all

// //includes, indexOf
// console.log(arr.includes(2))  // check specified value held or not return true/false
// console.log(arr.indexOf(3))  //check which element at specified idx, if idx not available (-1)


//imp stuff 

// const oldArr = [0, 1, 2, 3, 4, 5]
// const newOne = oldArr.join()

// console.log(oldArr)    
// console.log(typeof newOne) //you'll notice the dt of newOne will change to string after joining oldArr



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

















