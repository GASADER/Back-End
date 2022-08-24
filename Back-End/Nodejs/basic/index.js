const http = require('http')
const fs = require('fs')

const indexpage = fs.readFileSync(`${__dirname}/webpage/k-shop templates/index.html`)

const server = http.createServer((req,res)=>{

    const pathName = req.url
    console.log(__dirname)
    if(pathName==="/" || pathName==="/home"){
        res.end(indexpage)
    }else if(pathName==="/product"){
        res.end("<h1>Hello Product</h1>")
    }else{ 
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
server.listen(3000,()=>{
    console.log("start server")
})