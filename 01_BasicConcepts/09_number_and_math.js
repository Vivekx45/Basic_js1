
//Numbers in JS
const score = 400
console.log(score);

const balance = new Number(100.876)
console.log(balance);    //if you put in this code in console then it console provide you some methods related to the numbers

//some method we'll discuss here

//convert number into string
console.log(balance.toString().length);  //as it becomes string we can use string methods to it.


//get number of decimal shown when outout get in bash
console.log(balance.toFixed(2));  //provides specified number of value shown after decimal.


const othernum = 449.5

// round off method for numbers
console.log(othernum.toPrecision(3));  //450   


// sometimes we won't be able to read zeroes to get separated by commas we use this method 
const hundreds = 10000000
console.log(hundreds.toLocaleString());


//You can also discover mutliple methods related to number on web browser console




//*********************Math in JS */

/*
Math is a libaray default associated with js
*/

console.log(Math)   //it's basically an object.
console.log(Math.PI)   //to get PI value and more values you can check on web console


console.log(Math.abs(-100))   //returns the absolute value

console.log(Math.round(4.5))  //roundoff
//round-off ceil and floor
console.log(Math.ceil(4.5))

//to find min,max values form given numbers
console.log("Min value is :",Math.min(4,5,7,88,12,3454,11,34,53,2,98))
console.log("Max value is :",Math.max(44,5,7,88,12,3454,11,34,53,2,98))


//Now imp stuff where we often use math library

//for getting random number
console.log(Math.random())    //it will give you random values from 0 to 1
//to get values in range you want you have to do like this 
console.log((Math.random()*10) + 1);  //as we know any decimal num will multiply with 10 it will shift with one digit so we can use it as to get range of 1-10.
//to get rid of getting 0 value on random we use +1 in it


// if we found any case where we have to define min and max value both then there's an imp formula to get values btw range you sepcified
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
