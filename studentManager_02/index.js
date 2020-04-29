// requirements
// a student manager app that is able to: 
// - show current student list
// - add new student

const readlineSync = require('readline-sync');
const fs = require('fs');
let students = [];
function loadData() {
    let fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent); 
}
function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save & exit');
    let option = parseInt(readlineSync.question('Choosen your: '));
    switch(option) {
        case 1: 
            showStudent();
            showMenu();
            break;
        case 2: 
            showCreateStudent();
            showMenu();
            break;
        case 3: 
            saveAndExit();
            break;
        default: 
            console.log('Wrong option!!!');
            showMenu();
            break;
    }
}

function showStudent() {
    for (let student of students) {
        console.log(student.name, student.age);
    }
}
function showCreateStudent() {
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content);
}
function main() {
    loadData();
    showMenu();
}
main();