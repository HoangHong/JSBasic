
/**
 * 
 * syntax 
 * 
 * arr.reduce(function(item1, item2){
 *      // calculation
 *      return x;
 * }, init);
 * method name: reduce
 * 
 * 
 */

 let numbers = [1, 2, 3, 4];
 let sum = numbers.reduce((a, b) => {
     return a + b;
 });
 console.log(sum);

 let products = [
    {
        name: 'A',
        quantity: 2,
        unitPrice: 10
    },
    {
        name: 'B',
        quantity: 3,
        unitPrice: 20
    },
    {
        name: 'C',
        quantity: 4,
        unitPrice: 30
    },

 ];

 // total?

 let total = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.unitPrice;
 },0);
 console.log(total);



 let items = ['Tom', 'Bill', 'Kim'];
 // use reduce to make this reslut
 // '<Tom><Bill><Kim>

 let reslutItems = items.reduce((accumulator, currentValue) => {
    return accumulator + '<' + currentValue + '>'  ;
 }, '');
 console.log(reslutItems);