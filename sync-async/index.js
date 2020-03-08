var fs = require('fs');


// Sync
console.log('Start');
var song = fs.readFileSync('./song.txt', {encoding: 'utf8'});
console.log(song);
console.log('End');

console.log('------------------')

// ASync
console.log('Start');
var song = fs.readFile('./song.txt', {encoding: 'utf8'}, function(err, song) {
    console.log(song);
});
console.log('End');