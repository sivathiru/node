//Import the event
var events = require('events');

//create event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follows 
var eventHandler = function connected(){
    console.log('connection succesful.');
// Fire the data_received event 
   eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', eventHandler);

// bind the data_recieved event with asyncronous event
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
})

// Fire the connection event 
eventEmitter.emit('connection');

// eventEmitter.emit('eventName');

console.log("Program Ended.");
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);