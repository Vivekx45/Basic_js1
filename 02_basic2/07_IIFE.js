//Immediately invoked function execution.
// Helps to execute function immediately
// to get rid of Global scope pollution (interview question.), obviously
// due to function it automatially creates block scope to remove GSpollution 


//Normal func
// function chai(){
//     console.log(`Db connected`);
    
// }
// chai()


// To change into IIFE
//Basic syntax
//(Here we write func definition)(func execution)
//Also called 'named IIFE'
(function chai(){
    console.log(`Db connected One`);
    
})
();//It's for execution just we call like in normal func
//Now it'll become IIFE

//IMP point to remember
//You must remember that whenever two consecutive IIFE declared there must be semi-colon 
// needs to use for code-error free exection


// IIFE in arrow func
//Simple IIFE
(() => {
    console.log("DB connected Two")
}
)
();

//to execute with para. declaration and arguments exec.
((name) => {
    console.log(`DB connected Two ${name}` )
}
)
("VIvek")
