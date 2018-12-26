var fs = require('fs');
var data = "Simple Learning Easy";

var writeStream = fs.createWriteStream('output.json');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function(){
    console.log("Write completed.");
});

writeStream.on('error', function(err) {
    console.log(err.stack);
 });
 
 console.log("Program Ended");
 