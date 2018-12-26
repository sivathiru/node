//Import the event
var events = require('events');

//create event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follows 
var eventHangler = function connected(){
    console.log('connection succesful.');
// Fire the data_received event 
   eventEmitter.emit('data_received');
}

eventEmitter.on('eventName', eventHandler);
eventEmitter.emit('eventName');

console.log(eventEmitter);