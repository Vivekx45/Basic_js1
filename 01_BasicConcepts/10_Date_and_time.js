//Here we learn about Date(Is a object) and times
/*
Here date has an api used for dates called Temporal
*/
let myDate = new Date()
console.log(myDate);  //2025-12-11T05:31:54.827Z  output is complicated so we use some methods to make it readable

//such as making it to string.
console.log(myDate.toString());  //Thu Dec 11 2025 05:34:04 GMT+0000 (Coordinated Universal Time)  it is more readable format.

//trying multiple methods to get different time varients.
console.log(myDate.toISOString());   //2025-12-11T05:37:26.108Z
console.log(myDate.toDateString());   //Thu Dec 11 2025
console.log(myDate.toTimeString());   //05:37:26 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); //12/11/2025, 5:37:26 AM
console.log(myDate.toLocaleDateString());  //12/11/2025
console.log(myDate.toLocaleTimeString());  //5:37:26 AM

//to get its type
console.log(typeof myDate);  //object


//to declare specific date
let create_date = new Date()






//Other format to get IST time

// // Creating a new Date object for the current time
// const currentDate = new Date();

// // Format the date to an IST string using the 'Asia/Kolkata' time zone
// const istTimeString = currentDate.toLocaleString('en-IN', {
//     timeZone: 'Asia/Kolkata',   //based on IST
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: true // To Use 24-hour format make it false
// });

// console.log(istTimeString);








