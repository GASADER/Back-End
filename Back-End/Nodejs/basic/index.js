const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("<h2>Hello node.js</h2>")
    res.end()
})
.listen(3000,()=>{
    console.log("start server")
})