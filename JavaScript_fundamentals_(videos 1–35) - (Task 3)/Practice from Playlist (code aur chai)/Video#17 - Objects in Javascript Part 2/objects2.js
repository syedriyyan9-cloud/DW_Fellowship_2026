// how to make singleton objects using constructor
// no internal difference between objects when declared using constructor or when declared using literals

let tinder_user = new Object()

console.log(tinder_user)

tinder_user.id = "123123123"
tinder_user.name = "sam"
tinder_user.is_loggedin = false

console.log(tinder_user)

// now to define objects inside in an obj

let regular_user = 
{
    email : "some@gmail.com",
    full_name : 
    {
        user_full_name : 
        {
            first_name : "Riyyan",
            last_name: "Hassan",
        }
    }
}

// to access obj inside obj use dot operator
console.log(regular_user.full_name.user_full_name)

// if an obj does not have a certain obj inside itself use '?'

let obj1 = { 1 : "a", 2 : "b"}
let obj2 = { 3 : "a", 4 : "b"}

// to combine two objects 

// give empty braces as first arg to ensure that we get an obj combined using other objs
// delacres an emptyy obj then holds value of combined results then assigns it to the variable name
let obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

// do not do the following
let obj3 = {obj1, obj2}
// obj3 just has obj1 and obj2 entirely without any merging

// another way to combine objects is to use spread operator
let obj5 = {...obj1, ... obj2}
console.log(obj5)

// when you get values from database we usually get it in a an array of objs
let user = [
    {
        name: "riyan"
    }
]
// access values from objects from array of objs first access obj then use dot notation
user[0].name


// to get all the keys from an object use .keys method
console.log(Object.keys(tinder_user)) // returns an array containing keys of the obj

console.log(Object.entries(tinder_user)) // key and value in an array which is  insde another array

// to check if an obj has a key or att use hasOwnProperty
console.log(tinder_user.hasOwnProperty("is_loggedin"))  // returns true if property is present else false
