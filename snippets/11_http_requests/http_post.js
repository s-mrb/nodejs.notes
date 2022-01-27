const https = require('https')


const obj = {
    "userId":1,
    "id":1,
    "title":"whatever",
    "completed":false
}

const data = JSON.stringify(obj)

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()