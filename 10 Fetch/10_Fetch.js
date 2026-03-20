/* 
The fetch API is a modern, promise-based interface for making HTTP requests and is a built-in global function in Node.js v18 and newer. For older versions, you must install the node-fetch package
Ex CODE :-
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => console.log(data)) // Work with the parsed data
  .catch(error => console.error('Error fetching data:', error)); // Handle network errors

*/
/* 
An interview que. - You requested to promise and got error 404 then you'll get it in resolve or reject the answer is you got it in
response, thus the promise only rejects when browser unable to request the network.
*/

//fetch has a lot of parameters, if you want to send userid, password or anything then you add more parameters after putting link to it in fetch.  

// MORE DATA IN COpy.





