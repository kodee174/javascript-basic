var fs = require('fs');

fs.readFile('./song1.txt', {encoding: 'utf8'}, function(error, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', {encoding: 'utf8'}, function(error, song2) {
        console.log(song2);
        fs.readFile('./song3.txt', {encoding: 'utf8'}, function(error, song3) {
            console.log(song3);
        });
    });
});
