// comparision is different when 2 datatypes are compared
// the result is not predictable when comparing different datatypes
// example
console.log("2" > 1)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// problem is value conversion
// the reason is that an equality check == and comparisions >,<,<=,>=,
// work differently 
// comparisons convert null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 is false.

// the same confusion is with undefined
console.log(undefined == 0)
// no matter the comparson operator the result is always false with undefined

// comparison and equality are different in JS
// their syntax is also different.
// strict check ===
// checks values and their datatypes
console.log("2" == 2) // this is true
// where as
console.log("2" === 2) // is false.

// avoid comparing different datatypes.
// especially with null and undefined.