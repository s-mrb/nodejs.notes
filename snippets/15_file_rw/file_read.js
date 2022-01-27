const fs = require('fs')

fs.readFile('./test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Read asynchronously: ",data)
})


// OR Synchronous way to read
try {
  const data = fs.readFileSync('./test.txt', 'utf8')
  console.log("Read asynchronously: ",data)
} catch (err) {
  console.error(err)
}