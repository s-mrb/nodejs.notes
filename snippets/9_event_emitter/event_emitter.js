

// node event_emitter.js add num1 num2
// num1 and num2 must be whole numbers

// on add event, get sum of sumbers and call rand_incr
// rand_incr increment sum by a random whole integer
// after incrementing sum check whether ans is odd or not
// on even event call rand_incr event
// on odd event return


const EventEmitter = require('events')
const event_emitter = new EventEmitter()

event_emitter.on('add',(num1,num2)=>{
  let sum = num1+num2
  console.log("add event detected.\nSum=> ",num1,"+",num2,"=",sum)
  console.log("Emitting `rand_incr` event")
  event_emitter.emit('rand_incr',sum)
})

event_emitter.on('rand_incr',(num)=>{
let incremented_sum = num + Math.floor(Math.random() * 10) 
console.log("Incremented Sum: ",incremented_sum)
if(incremented_sum%2==0){
  console.log("Even Incremented Sum detected!\n")
  event_emitter.emit('even',incremented_sum)
}
else{
  console.log("Odd Incremented Sum detected! Calling `odd`, it can be emitted once")
  event_emitter.emit('odd',incremented_sum)
}
})


event_emitter.on('even',num=>{
  console.log("Emitting `rand_incr` again.")
  event_emitter.emit('rand_incr',num)})

event_emitter.once('odd',()=>{
  console.log("\nTerminating process ....")
  return
})

if(process.argv[2]=="add"){
  event_emitter.emit("add",parseInt(process.argv[3]),parseInt(process.argv[4]))
}

