// closure is a technique that is very useful but for that you need to have understanding of DOM

// nested scope
function one()
{
    let username = "riyyan"
    // function inside a function
    function two()
    {
        let website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()

// function two can access the variables of function one whereas function one cannot access the variables of function two
// execution is line by line if there is an error encoutered then the entire programm stops and rest lines are not executed
// this is called closure when an inner function can access variables of outer function

if (true)
{
    let username = "riyyan"
    if (username == "riyyan")
    {
        let website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++++++ interesting ++++++++++++

console.log(add_one(2))

function add_one(num)
{
    return num + 1
}

// console.log(add_one(2))

// this is called expression
// console.log(add_two(4))
let add_two = function(num)
{
    return num + 2
}

console.log(add_two(4))

// hoisting tells how final tree is made where all the variables are defined
// Hoisting is a JavaScript mechanism where variable, function, class, or import 
// declarations are allocated memory and registered in their scope before the code actually runs.

