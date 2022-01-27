

const timeOut = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout((err, _) => {
      if (err) {
        reject()
        return
      }
      resolve(delay)
    }, delay)
  })
}

timeOut(1000)
  .then((delay) => timeOut(delay))
  .then((delay) => timeOut(delay))
  .then((delay) => timeOut(delay)).then(delay => console.log('I got printed after ', delay * 4, ' ms'))
