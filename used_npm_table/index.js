const readlineSync = require('readline-sync');
const  fs = require('fs');

let students = [];
function loadData() {
    let readFile = fs.readFileSync('./data.json');
    students = JSON.parse(readFile);
}
function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save and exit');
    let option = readlineSync.question('Choosen your: ');
    switch(parseInt(option)) {
        case 1: 
            showStudent();
            showMenu();
            break;
        case 2:
            createStudet();
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
    for(let student of students) {
        console.log(student.name, student.age);
    }
}
function createStudet() {
    let name = readlineSync.question('Name of student: ');
    let age = readlineSync.question('Age of student: ');
    let student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student);
}
function saveAndExit() {
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content);
}
function main() {
    loadData();
    showMenu();
};
main();