// node promise.js 0 -> reject promise
// node promise.js 1 -> resolve promise

const promise = new Promise((resolve, reject) => {
  if (process.argv[2] && process.argv[2] == 1) {
    const data = 'Promise fulfilled'
    resolve(data)
  } else {
    const err = 'Promise rejected'
    reject(err)
  }
})

const wrapper_fn = () => {
  return promise
}

const async_fn = async () => {
  // we will use try catch, because promise can reject,
  // and in that case error will be thrown
  try {
    const promise_value = await wrapper_fn()
    if (promise_value == 'Promise fulfilled') {
      console.log('Fulfilled')
      return 'hurrah'
    }
  } catch (e) {
    console.log('Rejected')
    return 'oh'
  }
}

// Note that async functions return a promise implicitly
async_fn()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
