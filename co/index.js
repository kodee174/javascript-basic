var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function (error, data) {
            if(error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

co(function*() {
    // var song1 = yield readFilePromise('./song1.txt');
    // var song2 = yield readFilePromise('./song2.txt');
    // var song3 = yield readFilePromise('./song3.txt');
    // return [song1, song2, song3];
    var values = yield [
        readFilePromise('song1.txt'),
        readFilePromise('song2.txt'),
        readFilePromise('song3.txt')
    ];
    return values;
}).then(function(values) {
    console.log(values);
}).catch(function(error) {
    console.log(error);
});


var readFiles = co.wrap(function*(files) {
    var values = yield files.map(function*(files) {
        return readFilePromise(file);
    });
    return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
.then(function(values) {
    console.log(values);
})