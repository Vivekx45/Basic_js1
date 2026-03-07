//here we gonna fetch data from the actual json file api through 'async await' method, a basic project.
//practicing for next section 10_fetch() class
// random users api data to do some practice via async await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()    //here we convert that whole data into json cuz we get that whole data in a string., also this conversion needs to be await
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
        
//     }
    
// }

// getAllUsers() //thus we'll get all users data.

//With another approach.
//this whole data gathering with "then catch and finally" approach

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
}
)
