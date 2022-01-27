const addition = (a, b) => {
  console.log('Sum: ', a + b)
}

// to store id returned by setTimeout
var id

const slow_addition = (delay, a, b) => {
  // first arg is function to run
  // second arg is delay in milliseconds
  // rest of args are parameters to function passed
  id = setTimeout(addition, delay, a, b)
}

// runs after 2 seconds
slow_addition(2000, 3, 5)

//  pass 0 in command line if you want to cancel execution of timed function
if (process.argv[2] && process.argv[2] == 0) {
  clearTimeout(id)
  console.log("Sum won't be printed")
}
