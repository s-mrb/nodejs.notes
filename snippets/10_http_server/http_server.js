// PORT=port node http_server.js

const http = require('http')

const port = process.env.PORT

// The key thing to understand is that when you initialize the HTTP server
// using http.createServer(), the callback is called when the server
// got all the HTTP headers, but not the request body.
const server = http.createServer((req, res) => {
  let data = ''
  req.on('data', (chunk) => {
    data += chunk
  })
  req.on('end', () => {
    console.log(JSON.parse(data)) // 'Buy the milk'
    res.end(data)
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  //    Note that belwo commented line won't send any data to client,
  //    because callback is called when headers of request received not data
  //    res.end(data)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
  console.log(`Visit: http://localhost:${port}`)
})
