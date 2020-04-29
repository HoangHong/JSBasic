/**
 * comparison operator 
 * 
 * > >= < <= === !== == !=
 * 
 */


 /**
  *  ======== for loop
  * syntax 
  * for(init; condition; final-expression) {
  *     statements;
  * }
  * keywords: for
  * 
  */


// bai toan: hien thị ra man hinh từ 0 - 9

for(let i = 0; i < 10; i++) {
    console.log(i);
}


/**
 *  1. i = 0 
 *  2. 0 < 10 -> true
 *  3. display 0
 * 4. i = 1
 * 5. 1 < 10 -> true
 * 6. display 1
 * ...
 * n. display 9
 * n+1. n = 10
 * n+ 2. 10 < 10 -> false
 * 
 */
console.log('===========================')
 for (let i = 9 ; i >= 0; i--) {
     console.log(i);
 } 

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

 // hiển thị tên nhân viên line by line
 for (let i = 0; i < employees.length; i++) {
     console.log(employees[i].name, employees[i].age);
 }