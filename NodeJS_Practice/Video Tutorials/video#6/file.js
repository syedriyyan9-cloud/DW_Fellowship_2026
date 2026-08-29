const fs = require("fs")
const os = require("os")

console.log(os.cpus().length)   // tells how many cores your computer have.

// sync
// console.log("1")
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)
// console.log("2")
// expected result using blocking/ sync:

// 1
// result
// 2

// using sync allows you to store the result in a variable,
// in async you cannot store result in a variable

// console.log("1")
// fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
//     if (err){
//         console.log("error", err)
//     }
//     console.log(result)
// })
// console.log("2")
// exptected result using async/ non blocking

// 1
// 2
// result
//
// non blocking operation gives result using a callback as it does not block a thread
// blocking operation returns result directly as it is blocking a thread

// deafult thread pool size = 4
// max? - depends on your cores
// if 8 cores then i can have 8 cores