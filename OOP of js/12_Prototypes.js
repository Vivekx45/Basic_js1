

//------------------------------OBJECT AND new KEYWORD-----------------------------------

/* Javacscript general behavior is - Prototypal behavior[means js doesn't lose easily it tries to find the soln to execute and tries to check parents and grand p. also until it finds null value.]
-Wth of prototype we got 'new' keyword functinality, classes functionality also this keyword fun.
 also inheritance functionality this is the behavior of js

Everything(string, array, loops etc.) in js is Object
is function also an object ????? - ans is Yes definitly
that's why js is prototypal inheritance language (it won't loose try to reach upto parent(i.e object))
*/

function add(num) {
    return num + num
}

add.power = 2

// console.log(add(4));
// console.log(add.power);
// console.log(add.prototype);  //{} got empty obj, bydefault context sets from that 'this' method(if it declare there.)

function createUser(username, score) {
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}   //in browser 

createUser.prototype.printMe = function() {
    console.log(`${this.username} has score : ${this.score}`);
    
}

const user1 = new createUser("vivek", 25)
const user2 = new createUser("viku", 23)
const user3 = new createUser("viks", 20)

// user1.increment()
// user1.printMe()

// user2.increment()
// user2.printMe()


/* 

BTS of 'new' keyword...

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intented return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



//------------------------------PROTOTYPE--------------------------------------------------------

// To understand Prototype 
// the topic prototype explain the behavior of javascript and used for inheritance.
// also you will understand what is function and behavior of it.


//When we declare something like this in console it provide some methods and most importantly [Prototype] in this session we gonna discuss about it why it helds and wht's the behavior of js.

let myName = 'Vivek    '
console.log(myName.length); // it's a property

// for ex.  we want create such method called .truelength with shows actual words length without adding whitespaces, we can do that but with trim method like shown below but i don't want to use extra method to do it, i just want to create that method.
console.log(myName.trim().length);   //it's a method


let Heroes = ['Iron man', 'superman', 'thor']

let heroPower = {
    Iron_man: "Iron suit", 
    superman: "man of steel",
    thor: "Hammer",

    getThorPower : function() {
        console.log(`IronMan power is ${this.Iron_man}`);
    }
}

//if we wanna create our own method, in such way we do that
Object.prototype.vivek = function() {
    console.log(`Vivek is also a Hero, and it present in all objects.`);
    
}  //after creating it in universal object it present in every object.i.e you have accessed topped level heirarchy and created that property in it.
// heroPower.vivek()   // thus we can call in any object.
Heroes.vivek()

//Now what if we inject that property only in array does it accessed by object ????, let's see

Array.prototype.newHero = function() {
    console.log(`Scarlett witch is the new hero`);
    
}
//the answer is NOOOOOOOOO such if we inject that property in array thus that will not be accessed in object.




// ----------------------------INHERITANCE------------------------------------------

const teacher = {
    teacherName : "English",
    inSchool : true,
    email : "x@email.com"
}

const student1 = {
    studentName : "Vivek",

    //to innherit the properties of teacher we use __proto__ keyword
    __proto__ : teacher
}

const student2 = {
    studentName : "Shubh",
    
}

//even at outside we can inherit the properties of any obj, such method called prototypal inheritance.
student1.__proto__ = teacher   //this its a prototypal inheritance.
//but it's an older method to declare inheritance

//New method be like to declare inheritance
Object.setPrototypeOf(teacher, student2)


//SO our final goal is to create a method .truelength of any string 

let username = "VIVekTetwal   "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);

    // return this.trim().length
}

username.trueLength() //here we achieved to create our own methods
"hElloo    ".trueLength()
"WORlddd    ".trueLength()