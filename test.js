const fs = require('fs');
const JSONStream = require('JSONStream');

let stream = fs.createReadStream('metricTypes.verbose.json', {encoding: 'utf8'});
//let stream = fs.createReadStream('sample.json', {encoding: 'utf8'});
let parser = JSONStream.parse(['metricType-array', true]);

stream.pipe(parser);

console.log('start');

let i = 0;

parser.on('data', function (obj) {
	console.log(obj.identifier);
});

console.log('end');

//var fs = require('fs'),
// obj = JSON.parse(fs.readFileSync('sample.json', 'utf8'));    
//console.log(obj);