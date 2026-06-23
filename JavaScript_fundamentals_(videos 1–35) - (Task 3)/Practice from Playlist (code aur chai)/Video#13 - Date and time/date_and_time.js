// all our dates are calculated from jan 1, 1970
// we would get answer in seconds
// not easy to compare dates with each other

// temporal api is to be used for date methods
// main objective is to get temporal api accepted by all browsers
// however these are future concerns

// create a date obj
let my_date = new Date()
console.log(my_date)

// converting date to string
console.log(my_date.toString())

// there are various method for date obj. main ones are:
// tostring give date and time your pc is currently using in a string format
console.log(my_date.toString())

// date string gives only the date in a string format
console.log(my_date.toDateString())

// gives date and time in the same format as when printed without any method except that it would be in string
console.log(my_date.toISOString())

// same as toisostring
console.log(my_date.toJSON())

// gives only date in string
console.log(my_date.toLocaleDateString())

// gives date and time in string, both are separated by comma
console.log(my_date.toLocaleString())

console.log(typeof my_date) // obj

// year, month, day parameter are given to below date obj
let my_created_date = new Date(2023, 0, 23)
console.log(my_created_date.toLocaleString())

let my_created_date_1 = new Date("2023-01-14")
console.log(my_created_date_1.toLocaleString())

let my_created_date_2 = new Date("8-28-2022")
console.log(my_created_date_2.toLocaleString())

let my_time_stamp = Date.now()
// gives answer in miliseconds
// console.log(my_time_stamp)
// gettime also gives miliseconds
// console.log(my_created_date.getTime())

// to convert to seconds 
console.log(Math.floor(Date.now() / 1000))

// methods that we get with dates

let new_date = new Date()
console.log(new_date.getDate())
console.log(new_date.getYear())
console.log(new_date.getDay())
console.log(new_date.getMonth() + 1)


// a popular method to customize the date even more using default as 1st arg and an obj as 2nd arg
console.log(new_date.toLocaleString('default', {
    weekday: "long",
}))


