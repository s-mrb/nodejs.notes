const addition = (a, b) => {
  console.log(a + b)
}

// to store id returned by setInterval
var id;

const repeat_addition = (delay, a, b) => {
  // first arg is function to run
  // second arg is delay between consecutive calls of function
  // first call will also be after delay milliseconds
  // rest of args are parameters to function passed
  id = setInterval(addition, delay, a, b)
}


// runs after every 2 seconds
repeat_addition(2000, 3, 5)


//  pass 0 in command line if you want to cancel execution of timed function
if (process.argv[2] && process.argv[2] == 0) {
    clearInterval(id)
    console.log("Sum won't be printed even once")
  }
  