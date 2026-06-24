// with functions we have to learn about memory management
// functions are packages of code that can be reused

// the following task would be repetitive if we have to write it 10 times
// console.log("R")
// console.log("I")
// console.log("Y")
// console.log("Y")
// console.log("A")
// console.log("N")

// for these reasons we use funtions
// to declare function, first write keyword function then give parenthese and the braces which will hold code
function say_my_name()
{
    console.log("R")
    console.log("I")
    console.log("Y")
    console.log("Y")
    console.log("A")
    console.log("N")
}

// to execute function write function name followed by perenthese
say_my_name()

// most of the time we would be writing meaningful functions
// example

function add_two_numbers(num1, num2)
{
    // in js we do not give types of the numbers that we have to take as inputs
    console.log(num1 + num2)
}

// if we execute the function now without giving values we would get nan not a number printed on the console
add_two_numbers()

// the values that we will give to our function is called an argument
add_two_numbers(3,"a")

// input can be any datatype so for that we first have to validate our inputs

// when declaring functions when we use values then those values are called parameters

// we can add our result to a variable using return statement
let result = add_two_numbers(3,2)


// two to three ways to get value from the function

// first wayy
// function add_two_numbers(num1, num2)
// {
//     result = num1 + num2
//     return result
//     // anything written after return would not be read
// }

// second way
function add_two_numbers(num1, num2)
{
    return num1 + num2
}

result = add_two_numbers(2,4)
console.log(result)


function login_user_message(username)
{
    return `${username} just logged in `
}
// console.log(login_user_message("riyyan"))


// we can use default values in parameters 
function login_user_message(username = "riyyan")
{
    return `${username} just logged in`
}
console.log(login_user_message())



