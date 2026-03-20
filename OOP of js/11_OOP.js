// OOP in JS object oriented programming

//Object literal 

const user = {
    username: "Vivek",
    loginCount: 3,
    signedIn: true,


    getUserDetails: function() {
        console.log(`Username: ${this.username}`);   //this keyword used to get current context.
        return "Got user details from user database"
        // return this   // here we got output of the current context i.e object keypairs
           
    }
}

//normal access or object literals.
console.log(user.username);
console.log(user['loginCount']);

// also get methods from it .
console.log(user.getUserDetails());
// console.log(this);  if we try to get output of this in global context its cc is {} empty object., but in console of browser you'll get a 'window object' lot of stuff cuz browser holds a lot of api and data related to browser.


// Constructor functions - to get rid of declaring multiple user (user1, user2 ) we use constructors
/* 
EX's- const promises = new Promise() this 'new' keyword is a constructor func 
this 'new' keyword allows to create multiple instances with a single Object.
but there's a lot of situation where u need new specific own context also called constructor function.
*/

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this //if you write this or not you'll get output, it's implicitly dedined in js.

    // here you can create methods, function callback etc
    this.greetings = function() {
        return `HEllow! from $(this.username)`
    }
}
//Here if we don't user 'new' keyword then the userTwo overwrite the values of userOne thus we need to use 'new'(constructor func.) cuz it provide new instance for each object declaration
const userOne = new User("Vivek", 12, true)
const userTwo = new User("Shubh", 22, false)
console.log(userOne);
console.log(userTwo);
// console.log(userOne.constructor);  in actual it's a self refernce of you own function OP- [Function: User]

/* 
steps of new keyword
new(constructor func) 
- when you declare new keyword an empty object creates called instance 
- a construcor func called due ot new keyword
- all arguments and its values injected to this keyword and get you code
*/


// A real world example of OOP

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

const sedan = new Car('Verna', 'Old', '2015')
const Suv = new Car('Fortuner', 'New', '2018')
const Truck = new Car('Mercedez', 'New', '20017')

console.log(sedan);
console.log(Suv);
console.log(Truck);

//A method used to check instance by instancof
console.log(sedan instanceof Car);   //true

 