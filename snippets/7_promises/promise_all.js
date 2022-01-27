const fetch = require('node-fetch');

const f1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const f2 = fetch('https://jsonplaceholder.typicode.com/todos/2')

Promise.all([f1, f2])
  .then(([res1,res2]) => {
    console.log('Array of results', res1,res2)
  })
  .catch(err => {
    console.error(err)
  })