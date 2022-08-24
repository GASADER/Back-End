const http = require('http')

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log(pathName)
    if(pathName==="/" || pathName==="/home"){
        res.end("<h1>Hello Home</h1>")
    }else if(pathName==="/product"){
        res.end("<h1>Hello Product</h1>")
    }else{ 
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
.listen(3000,()=>{
    console.log("start server")
})