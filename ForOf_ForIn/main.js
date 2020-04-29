/**
 * 1. for.... of 
 * 2. for.... in
 * 
 */

let employees = [
    
    {
        name: 'thinh',
        age: 28
    },
    {
        name: 'Hiroshi',
        age: 26
    },
    {
        name: 'Maria',
        age: 32
    }
 ];

 //employee dại diện cho từng phần tử trong mảng
 for (let employee of employees) {
    console.log(employee);
    console.log(employee.name, employee.age);
 }

 // for...in lặp qua các key trong 1 object
console.log('===============')
 let myDog = {
     name: 'Đần',
     age: 1,
     weight: 5
 };

 for( let key in myDog) {
     console.log(key);
     console.log(myDog[key]);
 }