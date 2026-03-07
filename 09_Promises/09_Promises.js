//Promises - The Promise object represents the eventual completion(or failure) of an ayschronous operation and its resulting value.
// it simply means work couldn't done immediately but might happens later.
// two possibility of things we can do for data retrieve - async opn., await(async programming) or we can use promises for later data fetch.
// ex of promises - crytography, file management, network call, Db call from database.

/* A Prommise is in one of these states:
- pending : initial state, neither fulfilled nor rejected.
- fulfilled : meaning that the operation was completed successfully.
- rejected : meaning that the oepration failed.
*/

//There are two parts of promises used - 1) create promises 2) consume already created promises, first we learn making some promises, then we learn to consume it.

//Making of Promises.

// a wrong approach - 
fetch('https://something.com').then().catch().finally()

/*
before promise didn't launched in js still need to asynchronous prog. to fetch data, they used some libraries like Q and BlueBird wth of that we use concepts of promises like .fetch, .then, .catch in core js.
*/

// .then(), .catch(), .finally() approach 
//promise 1: 

//creation
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed.');
        //we have to call that resolve method to get "Promise consumed" .then's o/p
        resolve() //now below task(promise consumpter) is connected with this promise creator

    }, 3000)
})  // this is how declare promise

//consumption of created promise.
promiseOne.then(function(){
    console.log("Promise consumed");
    
})   //.then() is directly connected with resolve.

//other appraoch of above task.(here we doesn't need hold promise on a variable.)


//Promise 2:
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve() // resolve() always need to be called to get output from .then method

    }, 3000)
}).then(function(){
    console.log('Promise 2 consumed., resolved');
    
})

//IMP POINT - BTw this promise approach is more reliable as compare to async prog. by ajax prog.(XhttpRequest approach) we considered in last session.


//Promise 3:
const PromiseThree= new Promise(function(resolve, reject){
    // network data pass task which is gathered from somewhere
    setTimeout(function(){
        resolve({username: "Vivek", email: "x@example.com"})  //here we can pass data in object, array or any other format.
    }, 3000)
})

PromiseThree.then(function(user){
    // here we get that user data, so it is confirmed that if we pass any data in resolve method that would be access by .then function
    console.log(user);
     
})


//Promise 4:

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        //here we learn what if our web access/data retrievel/file access/ network request got failed/rejected, thus we apply check conditions.
        let error = true
        if (!error){
            resolve({username: "Vivek", password: "123"})
        } else {
            reject('ERROR: Something went wrong.')
        }
    }, 3000)
})

// const username = promiseFour.then((user) => {
    //     console.log(user);
    //     return user.username
    // })
    // console.log(username);
// above approach didn't func well, so we can do chaining of .then method 
// *********************IMP chaining concept u must have to remember that, when you do database connection this method will require alot************************

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
    
// }).then((myUsername) => {
// console.log(myUsername);

// })                        //we can write in next line due to more readability.
// .catch(function(error){
//     console.log(error);
    
// })   //this is the perfect way to catching errors and do tasks

//same code but added with finally()

//there are some situations where you need to use .finally(), and this will executes in any situation.
promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((myUsername) => {
console.log(myUsername);

})                        //we can write in next line due to more readability.
.catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log("the promise is either resolved or rejected, FINallly.");
    
})   //this is the perfect way to catching errors and do tasks


//In this Promise we use async, await approach. (it's similar to above approach that it waits to do that task unit to perform otherwise shows error, and it doesn't have 
// catch handle feature.)

// Promise 5: 
//now using arrow function
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error){
            console.log({username: "Javascript", password: 12345});
        } else {
            reject('ERROR: JS went wrong.')
        }
        
    }, 3000);
}) 

async function consumePromiseFive() {
    // const response = await promiseFive    //promiseFive is object so you can't do like this promiseFive()
    // console.log(response);
    
    //handling by try and catch.
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive() 
//but remember that due to lack of catch() functionality in await approacch if you get error while getting data this will throw error(i.e if error = true), this in that situation we an use 'try and catch' approach and handle that error.
































