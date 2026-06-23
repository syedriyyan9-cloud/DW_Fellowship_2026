let name = "riyyan"
let repo_count = 50

console.log(name + repo_count + "Value")
// the above syntax is outdated

// modern way to write strings is by using backticks
console.log(`hello my name is ${name} and my repo count is ${repo_count}`)
// this is called string interpolation, using of placeholders and backticks

// another way to create strings
let game_name = new String("riyyan")
// the above syntax is a new way to create string objects, new word is used for creating objects

console.log(typeof game_name)
console.log(game_name)
console.log(game_name[0])
console.log(game_name.__proto__)
// to access methods of the objects use dot after the variable namme

console.log(game_name.length)
console.log(game_name.toUpperCase())
// original value has not changed as it was passed by value as string is primitive datatpye

console.log(game_name)

console.log(game_name.charAt(5))
console.log(game_name.indexOf('a'))

// the more you know about string methods the better it is.
// go through all the methods to get familiar with string methods

let new_string = game_name.substring(1, 5)
// initial value is inclusive, last value is exclusive
console.log(new_string)

let another_string = game_name.slice(-5)
// you can use negative values in slice, and not in substring method.
// negative value just means that the value would be read from the last character instead of the initial character
console.log(another_string)

let new_string_1 = "    asdf  "
// note a lot spaces in the start and end of the string
// to remove these spaces use trim method
console.log(new_string_1)
console.log(new_string_1.trim())
// works on white space 

let url = "https://riyyan.com/riyyan%20"
// browser does not understand spaces
// it will convert the spaces to %
// to change %20 from the url use replace method
console.log(url.replace("%20", "-"))
// replaces %20 with -
console.log(url.includes("riyyan"))
// includes tells if there is a keyword present in the string
let convert = "riyyan-hassan-syed"
// lets say i want to convert a string into an array
// the array should split the convert variable at - points
console.log(convert.split('-'))
// this will turn my string into an array containing 3 strings
