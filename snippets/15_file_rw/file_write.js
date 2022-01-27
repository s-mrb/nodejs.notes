const fs = require('fs')

const data = 'This is to be written'

// Note: to append use appendFile

// In write there is nothing returned, undefined
fs.writeFile('./test2.txt', data, (err, ret) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Written asynchronously. Returned val: ', ret)
})

// OR Synchronous way to read
try {
  // In write there is nothing returned, undefined
  const ret = fs.writeFileSync('./test3.txt', data)
  console.log('Written asynchronously. Return Val: ', ret)
} catch (err) {
  console.error(err)
}
