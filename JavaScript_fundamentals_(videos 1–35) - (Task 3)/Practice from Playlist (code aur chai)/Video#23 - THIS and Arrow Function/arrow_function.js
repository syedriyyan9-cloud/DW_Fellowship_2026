// this keyword uses current context

let user = 
{
    username : "riyyan",
    price : 90,

    welcome_message: function()
    {
        // someone may change my username and i want to print the updated username
        // to solve the problem we use 'this' keyword
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}


// user.welcome_message()
// user.username = "sam"
// user.welcome_message()

console.log(this)   // empty obj

// when console.log(this) in browser we would get window obj

function chai()
{
    // when we print 'this' in a function we get a global values and a lot more
    let username = "werwer"
    console.log(this.username)
    // prints undefined
    // meaning this only works with objs and not functions
}
chai()

// how to declare functions using arrows

let chai1 = () =>
{
    let username = "werwer"
    console.log(this.username)
}

chai1()


// basic syntax: () => {}, you can hold it inside a variable
// let add_two = (num1, num2) =>
// {
//     return num1 + num2
// }

// console.log(add_two(9,12))

// implicit return, do not need to write return keyword, also codee should be of one line
// when using curly braces you have to use return keyword, when using parentheses do not use return
// let add_two = (num1, num2) => (num1 + num2)

// explicit return means to use return explicitly

// what if we wanted to return an obj
// let add_two = (num1, num2) => (username:"riyyan")

// this will give undefined so we have to wrap the obj inside the braces
let add_two = (num1, num2) => ({username:"riyyan"})



