//More Methods related to fetching data

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Adding 10 to each one of them
// const newNums = myNums.map( (num) => num + 10 )
// const newNums = myNums.map( (num) => { return num + 10} )

// by foreach
// const newNums = myNums.forEach( (num) => {
//     console.log(num + 10);
//     // return num + 10
// })

// by filter 
myNums.filter( (num) => {
    // console.log(num + 10);
})


// Another chaining concept 

// const newNums = myNums
//                 .map( (num) => num * 10)   //when chaining happens the second num hold newer converted array(i.e above one)
//                 .map( (num) => num + 1)
                
//Add more chains
const newNums = myNums
                .map( (num) => num * 10)   //when chaining happens the second num hold newer converted array(i.e above one)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)                


// console.log(newNums);



// Reduce method - The JavaScript Array.prototype.reduce() method executes a user-supplied "reducer" callback function on each element
//  of an array, resulting in a single output value. This single value can be a number, a string, an object, or a new array. 

//best ex to understandd this type of reduce method kind of loop
/*

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);  expected output-10
*/

const Noms = [1, 2, 3]

// const myTotal = Noms.reduce(function (acc, currVal) {
//     //to know what acc and currval holds at each iteration.
//     console.log(`acc: ${acc} and currval: ${currVal}`);
    
//     return acc + currVal

// }, 0  //initial val given to acc.
// )



// reduce in arrow func

//for readability
// const myTotal = Noms.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

//OR
//for smart way
const myTotal = Noms.reduce( (acc, currVal) => acc + currVal, 0)

console.log(myTotal);


// reduce as an example of shopping cart

const shopCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 1999
    },
    {
        itemname: "Data science",
        price: 12999
    },
    {
        itemname: "electical",
        price: 3999
    },
    
]

//for readability format
const totalPrice = shopCart.reduce( (acc, coursePrice) => {
    coursePrice = coursePrice.price
    console.log(`acc: ${acc} and each course val: ${coursePrice} `);
    
    return acc + coursePrice

}, 0)

// for smart way
// const totalPrice = shopCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);








