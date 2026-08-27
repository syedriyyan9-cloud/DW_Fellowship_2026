const fs = require("fs")
// sync..
// fs.writeFileSync("test.txt", "change the text")


// async
// fs.writeFile("contacts.txt", "riyyan: +92 312312312\nHassan: +92 3434343", (err) => {})

// sync
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)

// using sync allows you to store the result in a variable,
// in async you cannot store result in a variable

fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    if (err){
        console.log("error", err)
    }
    console.log(result)
})