const fs = require('fs')

try {
  const fd = fs.openSync('./test.txt', 'w+')
} catch (err) {
  console.error(err)
}