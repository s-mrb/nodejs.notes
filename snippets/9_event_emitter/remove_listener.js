const EventEmitter = require('events')
const event_emitter = new EventEmitter()

const callbackA = () => {
  console.log('A');
  event_emitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

event_emitter.on('event', callbackA);

event_emitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
event_emitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
event_emitter.emit('event');
// Prints:
//   A