var moment  = require('moment');
var now = new Date();
var myBirthday = new Date(1996, 3, 17);

console.log(now);
console.log(now.getTime());

console.log(myBirthday)
console.log(myBirthday.getTime());

var mm = moment('1996-04-17');
console.log(mm.fromNow());

var mm = moment('2020-03-06');
console.log(mm.fromNow());

console.log(mm.format('YYYY.MM.DD'));