//Objects
/*
objects can be declare of 2 types by literals, constructors
-there is a concept "singleton" it means when you make object with constuctor then it becomes
 singleton object
-in the case of literals declaration there is no singleton object will create its multiple instances
 will create automatically
*/

// Object.create we can also declare object like this, this is the constructor method


//Object literals


//Interview que - to add symbol as a key in object
const mySymbo = Symbol("Key1")
const obj_4_symbol = {
    [mySymbo] : "mykey1",   //sq. braces are part of syntax
}

console.log(obj_4_symbol[mySymbo]);
console.log(mySymbo)     //here key appears as Symbol(key1)


//Main story 

const JsUser = {
    name: "Vivek",     //name (i.e any key you define treated as string i.e "name")
    "full_name": "Vivek Tetwal",
    age: 20,
    location: "Mumbai",
    email: "vivek@google.com",
    isloggedIn: false,
    LastLoginDays : ["monday", "saturday"]
}
//How to access object
//first one
console.log(JsUser.age)
//another way to access
console.log(JsUser["name"]);      //above name treated as string so we have to declare as string
console.log(JsUser["full_name"]);
//both accessing method are used


//To change value of keys
JsUser.email = "Vivek6@chat.com"
console.log(JsUser);

//we can also freeze the changement of object, shown below
Object.freeze(JsUser)
//now Change can't be possible due to usage of freeze method
JsUser.email = "XYZ"
console.log(JsUser);  //you can see there is no change in email



//Adding funciton in an object
JsUser.gretting = function(){
    console.log("Hello JS USer!!");
    
    
}
// console.log(JsUser.gretting());  //from this we got output 
// console.log(JsUser.gretting)    //get Funciton(ananymous) it means function is only declared doesn't executed that why u didn't get output

//adding another function
JsUser.gretting2 = function(){
    console.log(`Hello Js User 2, ${this.name}`);
    // "this" used for getting key values from current using object
}

console.log(JsUser.gretting()); 
console.log(JsUser.gretting2());      //from this we got output 




//Part-2

//there is no internal difference between shown below both objects only differnce written with them
//in 1st part we discussed obout object literals now we discuss about 
//Object singleton using constructors


//way to create object
//const tinderUser = new Object()     //singleton object

const tinderUser = {}     //non-singleton object
//feeding key values
tinderUser.id = "1ab"
tinderUser.name = "Ros"
tinderUser.IsloggedIn = false

// console.log(tinderUser);



//Nested object
//now lets learn how can we implement objects in objects
const regularUser = {
    email: "riz@gmail.com",
    fullname: {
        userfullname : {
            firstname: "amy",
            lastname: "obroey",
        }
    }
}
//nested values accessed like this
console.log(regularUser.fullname.userfullname);  



//Merging/Combining objects

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "a",
    4 : "b",
}

//1st way(less used)
// const obj3 = {obj1, obj2}   this is problematic thing 
//2nd way (also less used)
// const obj3 = Object.assign({},obj1, obj2)   

//3rd way(mostly used way to merge all objects)  easy and efficient way.
const obj3 = {...obj1, ...obj2}  

//should add {} targeted array cuz its an empty array which holds all merge values 
//if we won't use it then all object values assign to obj1
console.log(obj3);


//Sometimes you can get this objects containing arrays values to access them you can use this method
const users = [
    {
        id : 1,
        email : "b@gmail.com" 
    },
    {

    },
    {

    },
]
users[1].email
// console.log(tinderUser);


//IMP thing about objects to get keys and values of objects in array formatted way
//most used methods
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // make every keyvalue pairs into an array inside an whole array

//to check is key/value exist in object
console.log(tinderUser.hasOwnProperty("IsLoggedIn"));










