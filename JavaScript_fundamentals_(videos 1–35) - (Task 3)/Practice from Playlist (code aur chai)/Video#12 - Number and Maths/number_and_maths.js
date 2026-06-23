let score = 234
// score holds the value of 234
console.log(score)

// to ensure that you get a number datatype use new with number to create a number obj
let balance = new Number(200)
console.log(balance)

// score only shows value but balancee give datatype and value
// advantage of using objects is that it comes with built in methods that can be used

console.log(balance.toString())
// this makes the number object into a string
// as now it is a string we can use strings built in methods on a number
console.log(balance.toString().length)

console.log(balance.toFixed(1))
// to fixed is used for tell js how much precision we want to display 

let other_number = 23.3534
console.log(other_number.toPrecision(3))
// we will get answer to nearest digit
// rounds off if the value is 5 or bigger
// returns a string

let hundreds = 1000000
console.log(hundreds.toLocaleString())
// give value using commmas after every 3 digits, or according to international standards
// you can pass 'en-IN' as parameter to get answer in indian standard
console.log(hundreds.toLocaleString('en-IN'))

// to get the maximum value that can be stored inside a number use MAX_VALUE 
console.log(Number.MAX_VALUE)
// to get minimum value that can be stored inside number use MIN_VALUE
console.log(Number.MIN_VALUE)
// to get safe value that we can use for a number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// -------------------------------
// maths library comes pre-built in JS
console.log(Math)
// shows that math is an objet. so it has methods that we can use

console.log(Math.abs(-32))
// abs gives absolute value, returns only positive values

console.log(Math.round(32.33))
// lets say i want a value to be rounded off to nearest digit before decimall

// to chose the top value when rounding off use ceil method
console.log(Math.ceil(4.4))
// to chose the low value when rounding off use floor
console.log(Math.floor(4.7))
// to get the minimum value from a group of values use min method
console.log(Math.min(354,2,3,523,23,123))
// to get the maximum value from a group of values use max method
console.log(Math.max(354,2,3,523,23,123))

// most used method is random method
console.log(Math.random())
// always gives values in range of 0 to 1
// so if you want values from a certain range that is higher than 1 then we
// can multiply it by the highest number and add 1 to avoid getting 0
console.log(Math.random()*10 + 1)
// now we would get value from 1 to 10

let min = 10
let max = 20
// Math.floor is usually used to get exact value in integer and not in decimal
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
