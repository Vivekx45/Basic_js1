//For comparison

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//****Intersting thing***

//it's not recommended to compare different dt's 
console.log("2" > 1); //true
console.log("02" < 1);  //false
//js is smart enough to change type according to situation but sometimes predicted output wouldn't appear as we thought.


//another interesting thing
console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true 
//same situation here as unexpected output occurs
/*  ***************************************************learn about ==, ===
The reason is that an equality check == and comparisons >, <,  >=, <= work differently
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 us false

conclusion - shouldn't write code like that
*/



//About == & ===

//=== : i.e strict check means it checks value also checks value dt.
console.log("2" === 2);  //false

console.log("2" == 2);   //true










