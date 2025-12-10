// Getting strong in String dt

"Hello" + "world"

const name ="vivek"
const srname = "tetwal"

console.log(name + srname + " is my name");   //this trick of declaring string is not recommended to use now a days.


// instead of above method we have to use backticks(``) (called String interpolation). let's have a look how it used.

let Name = "Gopi"
let Age = 20
console.log(`Hello my name is ${Name} and I am ${Age} years old`);  //this is how we use "string interpolation"

//string is an interesting concept 
//a different way to declare string.

const gameName = new String('New-string')
console.log(gameName);
//this method of declaring string allows us to get vast no. of methods used in string also it provide length of the string and the string stored in variable is in key:value pair, you can see when you put this code in console of web browser.

//Some method we'll discuss here.

//accessing a char of string by key:value pair
console.log(gameName[4]); 
console.log(gameName[1]); 


// to check length
console.log(gameName.length);


// to uppercase function
console.log(gameName.toUpperCase());  //it will not do any changement in original gameName as we saw in previous ch.
console.log(gameName);         
//same we use for lowercase


//check which char held on specified position
console.log(gameName.charAt(2));
//reverse of above method
console.log(gameName.indexOf('t'));


// for slicing a string(using .substring method)
const slic_of = gameName.substring(0, 5)//u can't put -ve values here
console.log(slic_of)

// for slicing but can also take -ve values
const another_str = gameName.slice(-6);    //you can also put -ve values in it.
console.log(another_str);


// for trim and replace method
const new_str1 = "         Vivek Tetwal  "   //sometimes we got lot of spaces in given string so to cope it we use trim method
console.log(new_str1)
console.log(new_str1.trim())     //you can see difffernce between this trimmed string and the original one


// for replacing any char or charset
const url = "https://vivek.com/vivek%29tetwal"
console.log(url.replace("%29","09"))


// we can also ask about char and charsets
console.log(url.includes('vivek'))

// for spliting string on basis of specified 
console.log(gameName.split('-'))   //get splitted part in array 
//most useful method
