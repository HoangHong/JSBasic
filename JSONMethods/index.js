/**
 * JSON object 
 * 1. stringify - convert an object to a JSON string
 * 2. parse - convert a JSON string to an object
 * 
 * 
 */
let myDog = {
    name: 'Milu',
    age: 1,
    dead: false
};
let myDogString = JSON.stringify(myDog);
console.log(myDog);
console.log(typeof myDog);
console.log('=====================');
console.log(myDogString);
console.log(typeof myDogString);

console.log('=====================');
let myCatString ='{ "name": "Tom", "age": 2,"dead": true}';
console.log(typeof myCatString);
let myCat = JSON.parse(myDogString);
console.log(myCat.name);




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


