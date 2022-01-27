const https = require('https')
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos/1',
  method: 'GET'
}

// when data arrives then 'data' event is emitted by 'res'
// when error occur then 'error' event is emitted by 'req'
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()