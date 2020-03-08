var readlineSync =  require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
    var content = fs.readFileSync('./data.json', {encoding: 'utf8'});
    students = JSON.parse(content);
};

function showAll() {
    for(var student of students) {
        console.log(student.name, student.age);
    };
};

function addNew() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');

    var student = {
        name: name,
        age: parseInt(age),
    }
    students.push(student);
};

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
}

function showMenu() {
    console.log('1. Show all');
    console.log('2. Add new');
    console.log('3. Save and Exit');
    var option = readlineSync.question('> ');
    switch(option) {
        case '1':
            showAll();
            showMenu();
            break;
        case '2':
            addNew();
            showMenu();
            break;
        case '3':
            saveAndExit();
            showMenu();
            break;
        default:
            console.log('Wrong option');
            break;
    };
};

function main() {
    loadData();
    showMenu();
};

main();