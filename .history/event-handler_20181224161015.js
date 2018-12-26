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

//bind the data_recieved event with asyncronous event
eventEmitter.on('connection', eventHandler);

eventEmitter.emit('eventName');

console.log(eventEmitter);