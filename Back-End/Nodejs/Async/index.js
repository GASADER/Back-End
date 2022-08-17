
const fs = require('fs')

fs.readFile("Nodejs/Async/myfile/input.txt", 'utf-8',(err,data)=>{
    if(err) return console.log("err",err)
    const outputText = `Hello \n${data} \nไฟล์นี้ถูกเขียนเมื่อ \n${new Date()}`
    fs.writeFile("Nodejs/Async/myfile/output.txt",outputText,err=>{
        if(err) return console.log("err",err)
        console.log("เขียนไฟล์เรียบร้อย")
    })
})

console.log("จบการทำงาน");