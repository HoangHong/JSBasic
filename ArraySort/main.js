

/**
 * ============= sort()
 * sort() method sort( sắp xếp) the elements of an array
 * return the sorted( đã sắp xếp) array.  
 * the default sort order is ascending( tăng dần).
 * 
 * arr.sort(function(a, b){
 *      
 * });
 * 
 *  returns a value < 0
 *      a will come before b
 * returns a value > 0 
 *      a will come after b
 * return 0
 *      a and b will stay unchanged
 * 
 */

 let numbers = [2, 9, 4, 1, 3];
 // [1, 2, 3, 4, 9]// ascending order

 let ascendingNumbers = numbers.sort((a, b) => {
     // a = 1, b = 4
     return a - b; 
 });
 console.log(ascendingNumbers);

 // [9, 4, 3, 2, 1]// descending order

 let descendingNumbers = numbers.sort((a, b) => {
     // a = 3, b = 4
     // expect a comes after b
     return b - a; 
 });
 console.log(descendingNumbers);

 let employees = [
     {name: 'Ti', age: 18},
     {name: 'Tèo', age: 20},
     {name: 'Maria', age: 19}
 ];

 let sortedEmployees = employees.sort((a, b) => {
     // a = employees[1], b = employees[2]
     // expecet: a come after b
     return a.age - b.age;// > 0
 });
 console.log(sortedEmployees);

 // Bài tập 

 // 1. define an array of products( name, price, stock(tồn kho))
 // 2. sort by price from more expensive to less expensive
 // 3. sort by in stock value from more expensive to less expensive


 let products = [
    {name: 'A', price: 243, stock: 3},
    {name: 'B', price: 124, stock: 5},
    {name: 'C', price: 43, stock: 2},
    {name: 'D', price: 67, stock: 8},
    {name: 'E', price: 98, stock: 12},
    {name: 'F', price: 56, stock: 1}
 ];
 // 2. sort by price from more expensive to less expensive

 let sortExpensive = products.sort((a, b) => {
     // a = products[1], b = products[2]
     // a = 124 ; b = 43
     // expected: a will come before b
     return b.price - a.price; // < 0
 });
 console.log(sortExpensive);
 console.log('==============');
console.log(products);
console.log('==============');

 let products_1 = [
    {name: 'A', price: 243, stock: 3},
    {name: 'B', price: 124, stock: 5},
    {name: 'C', price: 43, stock: 2},
    {name: 'D', price: 67, stock: 8},
    {name: 'E', price: 98, stock: 12},
    {name: 'F', price: 56, stock: 1}
 ];

 // 3. 

 let stockExpensive = products_1.sort((a, b) => {
    // a = 56 * 1; b = 67 * 8 = 536
    // expected: a will be come after => return > 0
    return (b.stock * b.price) - (a.stock * a.price);
 });
 console.log(stockExpensive);
