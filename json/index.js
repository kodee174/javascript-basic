var myDog = {name: 'Test', weight: 10};
var myDogString = JSON.stringify(myDog);
console.log(myDogString);


var myCatString = '{"name": "Cat", "age": 15}';
var myCatObj = JSON.parse(myCatString);

console.log(myCatObj);