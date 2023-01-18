let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(typeof(firstName)== 'undefined')
 console.log('Firstname value cannot be undefined');
 else if(typeof(firstName)!=='string')
 console.log("First Name must be of type string");


// Provide solution code here for Validating LastName
if(typeof(lastName)!=='string')
 console.log("Last Name must be of type string");


// Provide solution code here for Validating Age
if(typeof age == 'undefined')
console.log('Age cannot be undefined');
else if(typeof age !=='number')
console.log('Age should be number');
else if(age<18 || age>60 )
 console.log("Age value should be between 18 and 60");


// Provide solution code here for Validating isMarried
if(typeof(isMarried)!== 'boolean')
console.log("IsMarried value should be of type Boolean")


// Provide solution code here for Validating City
if(typeof(city)!=='string')
 console.log("Last Name must be of type string");


// Provide solution code here for Validating State
if(typeof(state)!=='string')
console.log("Last Name must be of type string");

// Provide solution code here for Validating Postal Code
if(typeof(postalCode)== 'undefined' || postalCode =="" || postalCode === null)
 console.log('Postal Code value cannot be undefined or Null');
 else if(typeof(postalCode)!=='string')
 console.log("Postal code must be of type string");


 