
let marvel_heros = ["thor","ironman","spiderman"]
let dc_heros= ["superman","flash","batman"]

// this would gives us an array within an array
// .push takes the entire data structure as it is
// this is not a good way to merge
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// another method is to use concat
// concat would return an array containing the elements of both the arrays
// would not take in entire data structure only its elements
let new_roaster = marvel_heros.concat(dc_heros)
console.log(new_roaster)

// another way to add array elements into another array is to use spread operator
let all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)

// both methods work well in adding two array together


let another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]
// .flat returns an array that merges elements to a depth given as an arg
// giving infinity makes the js find the depth on its own and return array containing element  on a single level or depth
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// false the arg is not an array
console.log(Array.isArray("riyyan"))

// makes string into an array
console.log(Array.from("riyyan"))

// cannot convert key value pair directly to an array
console.log(Array.from({name:"riyyan"}))

let score1 = 100
let score2 = 200
let score3 = 300

// .of returns an array from set of elements
console.log(Array.of(score1,score2,score3))

