const fs = require('fs')
fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()) //true
  console.log(stats.isDirectory()) //false
  console.log(stats.isSymbolicLink()) //false
  console.log(stats.size) //size in bytes
})

