var fs = require('fs');

var text = fs.readFileSync('./test.txt', {encoding: 'utf8'});

console.log(text);

fs.writeFileSync('./test.txt', 'Test');