// we know when we run for each loop we can iterate over an array of items
// but what if we store that loop inside a variable
let array = [1,2,3,4,5,6,8]
let values = array.forEach ( (item) => 
{
    // console.log(item)
    return item
})
console.log(values)

// returns undefined, if print statement in function then prints values
// how to use filter
// filter method takes in a callback
// for each does not return values
// filter returns values that can be stored
// in filter each value is first checked using a condition and then that value is returned
values = array.filter( (num) => 
{
    return num > 5
})
console.log(values)
// if we use scope we have to explicitly return the values, if we do not use scope or use parenthese then we do not need to write return keyword
//
// lets say i want to add 10 to all myy numbers in arrayy
// for that i would use map
// a map would implement a function on every element of the array
// does not change the original array, filter also does not change the original array
values = array.map( (num) => num + 10 )
console.log(values)
// console.log(array)
// we can chain multiple methods
// chaining means function calling another function which executes
// when chaining the first function that is written is invoked first, and its resultant array in passed as the array to the next function and so on and so forth
values = array.map( (num) => num * 10).filter( (num) => num >= 50)
console.log(values)
// in filter it evaluates to true or false where as map performs an operation on every item of the array.
//
// reduce method in arrays return a accumulated value of the arrays 
// first it will use an initial value and the it would start with elements of the array
values = array.reduce( (total, num) => total + num , 0 )// 0 is initial value 
console.log(values)
// store values in total and num is the current value of the array
// the 0 is initial value that would first be added to total.
//
