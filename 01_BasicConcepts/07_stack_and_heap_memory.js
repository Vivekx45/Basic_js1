//********************************************* */

/*

- Primitive dt's have Stack memory allocation
= when stack memory allocated in primitive type when we declare variable thus you get copy of it.
  that means there is no change in original value, the change only occurs in the copy value(original remains asitis)  
*/
//example -  
 let my_name = "Vivek tetwal"
 
 let same_name = my_name
 
 same_name = "Vicky tetwal"
 
 console.log(same_name);   //Vicky tetwal
 console.log(my_name);     //Vivek tetwal
 //as we discussed that when my_name variable value is stored in another variable then the copy of that variable(i.e my_name) will store in that another variable(i.e same_name) and then we change value of another variable thus there will be no effect on the original value so it proves that the primitive dt's used stack memory allocation method.
 

/*
- Non-Primitive dt's have Heap memory allocation feature
= when heap memory allocated in non-prim dt's the all changement or replacement will occurs in original variable (i.e you'll get  reference id of that variable) change happens in original values.
*/
//example.
//creating an object
let One = {
    email: "X@gmail.com",
    usrnm: "X"
}

let two = One

two.email = "Y@gmail.com";
console.log(two.email)    //Y@gmail.com
console.log(One.email)    //Y@gmail.com

//as you show in above ex when i put an object(one) value in variable then i declare another variable(two) and put (one) value in it then i change variable(two) not in one thus due to (two) value changment there's also gets change in (one) variable so it prove that non-priimitive dt's pass original value reference to the variable.
