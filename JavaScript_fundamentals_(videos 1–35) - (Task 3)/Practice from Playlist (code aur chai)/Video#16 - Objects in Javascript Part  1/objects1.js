// two ways to declare objects

// singleton created using construtor
// when we declare using literals, then obj is not singleton

// object literals


let my_sym = Symbol("key1")

// to add symbol to a key

let js_user = {
    name : "riyyan",
    age : 2312,
    location : "Lahore",
    [my_sym]: "key1",
    email : "riyyan@gmail.com",
    is_logged_in : false,
    last_login_days : ["monday","saturday"]
}

// in objects we can get value using key, or key using value
// key is taken as a string 
// value can be anything

// two ways to get values from an object

// using dot operator 
console.log(js_user.email)

// using brackets with key or value passed as a string
// this is a better way to get values
console.log(js_user["email"])
console.log(js_user["my_sym"])
console.log(typeof js_user[my_sym])

// to change a value of a key in object
js_user.email = "any@gmail.com"

// to ensure that no one can make changes to our object use freezze
// Object.freeze(js_user)
console.log(js_user)

// functions in js are treated as first citizen
// meaning they can be used as variables

js_user.greeting1 = function(){
    console.log(`hello js user`)
}

js_user.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
    // this refers to the objects keys
}

// gets functions reference
console.log(js_user.greeting1)

// runs the function
console.log(js_user.greeting1())
console.log(js_user.greeting2())


// another way to create is using object.create, this is called creating using constructor, singleton object is created