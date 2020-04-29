 // exercise 
 // 1. show all students 
 // 2. create a new students 
 // 3. save & exit
// save to ./data.json
// > 1
// fs.readFileSync, JSON.parse
// > 2
// your name, your age, your class?
// readlin-sync
// > 3. save in datat.json
let fs = require('fs');
let readFileSync = require('readline-sync');
const students = fs.readFileSync('./data.json', {encoding: 'utf-8'});
console.log('1. Show all students');
console.log('2. Create a new students');
console.log('3. Save & exit');


let option = parseInt(readFileSync.question('Choosen your: '));

switch(option) {
    case 1: 
        showStudents();
        break;
    case 2:
        createStudent();
        break;
    case 3: 
        saveStudent();
        break;
    default:
        console.log('The value is not valid!!!');

}

function showStudents() {
    console.log(students);
}
function createStudent() {
    
    let name = readFileSync.question('Your name: ');
    let age = readFileSync.question('Your age: ');
    let clas = readFileSync.question('Your class: ');
    const x = JSON.parse(students);
    x.push({name, age, clas});
    fs.writeFileSync('./data.json', JSON.stringify(x));
}

function saveStudent() {
    
    console.log('Success!!!!');
    
}