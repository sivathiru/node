//blocking

var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");


//non-blocking

fs.readFile('input.txt', function(err, data){
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log("Program Ended wtf");

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('eventName', eventHandler);
eventEmitter.emit('eventName');

console.log(eventEmitter);