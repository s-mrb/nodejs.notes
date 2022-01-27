// node promise.js 0 -> reject promise
// node promise.js 1 -> resolve promise

const promise = new Promise((resolve, reject) => {
  if (process.argv[2] && process.argv[2]==1) {
    const data = 'Promise fulfilled'
    resolve(data)
  } else {
    const err = 'Promise rejected'
    reject(err)
  }
})

promise.then((data) => console.log(data)).catch((err) => console.log(err))

