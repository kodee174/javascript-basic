// setTimeout(fn, ms);

console.log('Start');
var timeout = setTimeout(function() {
    console.log('Finish');
}, 1000);
clearTimeout(timeout);
console.log('Done');