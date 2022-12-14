const connect = true
const url1 = "kong.dev/package.json"
const url2 = "kong.dev/package.json"
const url3 = "kong.dev/package.json"
const mymodules = require('./modules1.js')
const fs = require('fs')
const data = fs.readFileSync('Nodejs/Sync/myfile/input.txt', 'utf-8')
const outputText = `${data} \n ไฟล์ถูกเขียนเมื่อ ${new Date}`
fs.writeFileSync('Nodejs/Sync/myfile/output.txt', outputText)

function downloading(url) {
  return new Promise(function(resolve, reject) {
    console.log(`กำลังโหลดจาก ${url}`)
    setTimeout(() => {
      if (connect) {
        resolve(`โหด ${url}`)
      }
      else {
        reject(`ผิด`)
      }
    }, 3000)
  })
};
async function start() {
  console.log(await downloading(url1))
  console.log(await downloading(url2))
  console.log(await downloading(url3))
}

console.log(mymodules.getCurrentTime())
console.log(mymodules.add(5, 55))
console.log(data)
console.log(outputText)


start()