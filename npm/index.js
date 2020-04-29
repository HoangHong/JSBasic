/**
 * 
 *  npm - node package manager
 *  
 */

 //readline-sync

 let readlineSync = require('readline-sync');
 let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


let languages = [];
let language = readlineSync.question('What is your mother language? ');
languages.push(language);
console.log(languages);




let pet = {};
let name = readlineSync.question('Your pet name: ');
let gender = readlineSync.question('Pet gender ( Male/Female): ');
let weight = readlineSync.question('Weight?: ');
pet.name = name;
pet.gender = gender;
pet.weight =parseInt(weight);
console.log(pet);


