// to understand the interaction between event loop and the call stack

process.nextTick(() => {
    console.log('In next tick')
    console.log(x)
  })
  
  const start = Date.now()
  
  // wait one sec to simulate call stack operation running one second
  while(Date.now()-start < 1000){
  
  }
  
  var x = "The value defined after current pop in call stack"
  
  console.log("If nextTick to run after entire script then this must not be last line")