// array

// always use brackets when declaring arrays
// values inside arrays are called elements
let my_array = [1,2,3,4,5,6]
// array is a collection of items

// JS arrays are resizeable
// can contain any datatype or mixed datatypes
// array values cannot be accessed using arbitrary strings

// to access element of an array use index
// index starts at 0.
// copy operations in JS creates shallow copy of an array
// deep copies do not share the same properties

console.log(my_array[0])

let my_heros = ["spiderman","superman", "batman"]

let my_array2 = new Array(1,2,3,4)
console.log(my_array2)

// array methods

// .push adds a value to the array
my_array.push(7)
console.log(my_array)

// .pop removes the last value
my_array2.pop()
console.log(my_array2)

// .unshift inserts an element at the start of the array
// time comsuming if the values were 10,000
// optimization comes later first built your staff
my_array2.unshift(9)
console.log(my_array2)

// shift removes the element at 1st index
my_array2.shift()
console.log(my_array2)

// some methods give answers in true or false
// true if elements is present in the array
console.log(my_array.includes(3))

// gives index of the element in the array
// if element is not present in the array returns -1
console.log(my_array.indexOf(2))

// .join converts the array into a string
let new_array = my_array.join()
console.log(new_array)
console.log(typeof new_array)

// splice, slice

console.log("A ", my_array)
// cuts the array from first arg (inclusive) till 2nd arg(exclusive)
// args are the indeices of the array
let new_array_2 = my_array.slice(1,3)
console.log(new_array_2)
console.log(my_array)

// args are the indices of the array
//cuts the array from first arg (inclusive) till 2nd arg(inclusive)
let new_array_3 = my_array.splice(1,3)
console.log(new_array_3)
console.log(my_array)

// difference between splice and slice is that splice manipulates the original 
// array where as slice does not manipulate the original array
