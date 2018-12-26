var fs = require("fs");
var data = "";


//create a ReadableStream
var readStream = fs.createReadStream('input.txt');


readStream.setEncoding('UTF8');

readStream.on('data', function(chunk){
    data += chunk;
    console.log(chunk);
})

readStream.on('end', function(){
    console.log(data);    
})

readStream.on('error', function(err){
    console.log(err.stack);
})
console.log('program ended');