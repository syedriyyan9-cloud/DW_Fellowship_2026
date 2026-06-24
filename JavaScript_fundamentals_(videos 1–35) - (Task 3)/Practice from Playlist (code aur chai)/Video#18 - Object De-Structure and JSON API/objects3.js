// destructuring
// applies to both objs and arrays

let course =
{
    name : "Physics",
    price : "1000",
    course_teacher : "riyyan"
}

// to get value from obj
// this is called how to de structure an obj
let {course_teacher: instructor} = course
console.log(instructor)


// react prop uses destructuring
// let nav_bar = ({company}) => {

// }
// nav_bar(company = "riyyan")

// API concepts

// apis are values that you use.
// most apis use json
// {
//     //js obj is json, but it would not have a name
//     "name" : "riyyan",
//     "course" : "js in hindi",
//     "price" : "free",
//     // all keys and values are strings, except numbers and bool as they are in their own format
// }

// sometimes you would get api in array containing objs
// [
//     {},
//     {},
//     {},
// ]

// json formatter and other tools are used to understand apis and their formats

