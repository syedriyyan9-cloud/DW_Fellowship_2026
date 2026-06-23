// datatypes are of 2 types according to original documentation of JS
// datatypes are primitive or non primitive

// this categorization is done on the basis of how data is stored inside memory
// and how it is retrived

// primitive datatypes are of 7 types
// string, number, boolean, null, undefined, symbol, BigInt
// all primitive datatypes are called by value

// non primitive datatypes or reference type
// the values that can be passed using reference
// array, objects, functions are reference types

// JS is dynamically typed langauge

let score = 100
let score_value = 10.23
let is_logged_in = false
let outside_temp = null
let user_email
let id = Symbol('123')
let another_id = Symbol('123')

console.log(id === another_id)

let big_number = 1231212312312n // js uses bigint to save huge values
// n is used for representing bigint.

// array
let numbers = [1,2,3,4,5,6]

// objects are written as key value pairs
let obj = {
    name : "riyyan",
    age: 123,
        }

let func = function ()
{
    console.log("hello world")
}

// how to know datatype of variable
// use typeof
console.log(typeof big_number)      // bigint
console.log(typeof outside_temp)    // obj, was null
console.log(typeof numbers)         // obj, is array
console.log(typeof user_email)      // undefined, did not change
console.log(typeof score_value)     // number not float
console.log(typeof func)            // function, is acutally obj function
console.log(typeof id)              // symbol