//Import the event
var events = require('events');

//create event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follows 
var eventHangler = function connected(){
    console.log('connection succesful.');
    
}

eventEmitter.on('eventName', eventHandler);
eventEmitter.emit('eventName');

console.log(eventEmitter);