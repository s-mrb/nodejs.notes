const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()
const hash = (id) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash ${id} time elapsed (milli seconds): `, Date.now() - start)
  })
}

const make_request = () => {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {})
      res.on('close', () => {
        console.log(
          'HTTP request time elapsed (milliseconds)',
          Date.now() - start
        )
      })
    })
    .end()
}

const read_file = ()=>{
    fs.readFile('file.txt', 'utf-8', () => {
        console.log('FS readfile time elapsed (milliseconds)', Date.now() - start)
      })
}

make_request()
read_file()
hash(1)
hash(2)
hash(3)
hash(4)
