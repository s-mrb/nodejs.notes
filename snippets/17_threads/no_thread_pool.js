const https = require('https')
const start = Date.now()

const make_request = () => {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {})
      res.on('close', () => {
        console.log(Date.now() - start)
      })
    })
    .end()
}

make_request()  // 698
make_request()  // 709
make_request()  // 710
make_request()  // 700
make_request()  // 690
make_request()  // 750
