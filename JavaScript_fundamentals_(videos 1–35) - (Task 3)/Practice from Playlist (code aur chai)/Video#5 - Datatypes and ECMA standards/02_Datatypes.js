// "use strict" this line uses newer version of JS
// however in most cases you do not need to write this as strict mode
// is used by default

//alert("hello") // this line will give error in node js but not in browser
// explanation is present in notes.txt file

// JS has a few datatypes 
let name = "riyyan" // string datatype as it is in double quotes
let age = 1232123   // nummber datatype uses numbers without quotes
let logged_in = true    // boolean datatype either true or false
let temp = null     // standalone value equivalent to Null in python
let something;      // undefined datatype where value is not given 
// another one is "symbol" which is used for uniquness

// all the datatypes above are primitive datatypes.
// use typeof function to find datatype of a variable
console.log(typeof(age))    // output is number
console.log(typeof(null))   // output is object
console.log(typeof(undefined))  // output is undefined
