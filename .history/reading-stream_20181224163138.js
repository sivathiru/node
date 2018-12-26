var fs = require("fs");
var data = "";


//create a ReadableStream
var readStream = fs.createReadStream('input.txt');

readStream.setEncoding('UTF8');
console.log(fs);