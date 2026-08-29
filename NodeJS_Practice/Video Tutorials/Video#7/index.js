const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} new request\n`
    fs.appendFile("logs.txt", log, (err, data) => {
        if(err){
            console.log(err)
        }
    })
    switch(req.url){
            case "/":
                res.end("Home page")
                break
            case "/about":
                res.end("About page")
                break
            default:
                res.end("404 not found")
                break
        }
})

server.listen(8000, () => console.log("Server started"))