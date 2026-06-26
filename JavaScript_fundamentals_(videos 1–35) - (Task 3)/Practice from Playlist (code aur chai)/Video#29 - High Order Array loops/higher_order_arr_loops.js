// arrays and obj are very common in js
// inside arrays we put objects
let arr = [1,2,3,4,5,6]

// iterating through for of loop
for (const num of arr) 
{
    console.log(num)
}

str = "hello world"
for (const letter of str)
{
    console.log(letter)
}

// maps are like arrays and are iterateable
let map = new Map()
map.set('name', 'riyyan')
map.set('age', 123)
map.set('email', 'riyyan@gmail.com')
for (const [k,v] of map)
{
    console.log(k, v)
}

// objs cannot be iterated like this:

let myobj = new Object()
myobj.name = 'riyyan'
myobj.age = 123
myobj.email = 'riyyan@gmail.com'
// // 
// for (const [k,v] of myobj)
// {
//     console.log(k,v)
// }

// to iterate objs use for in loop
// iteration through for in loop
for (const key in myobj)
{
    console.log(key,"---" ,myobj[key])
}

// for (const value in arr)
// {
//     console.log(arr[value])
// }

// for of loop gives value directly of arrays
// for in loop gives keys or index of arrays or obj

// map cannot be iterated upon using for in loop

// for each loop for arrays
// for each loop is a property of an array
// for each loop uses a callback function
// we can either pass a traditional function definition
// or we can use arrow functions
arr.forEach( (value, index, arr) => {
    console.log(index, value, arr)
} )












