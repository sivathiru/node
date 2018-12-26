var fs = require("fs");
var data = "";


//create a ReadableStream
var readStream = fs.createReadStream('input.txt');
console.log(fs);