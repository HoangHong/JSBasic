/**
 * if ........ else
 * syntax 
 * if(condition) {
 *      // statement when true
 * }else {
 *      // statement whent false
 * }
 * 
 */

 // example 1: toss( tung) a coin
 function tossCoin() {
     let value = Math.random();
     if(value < 0.5) {
        console.log('Mặt sấp!!!');
     }else {
         console.log('Mặt ngửa!!!')
     }
 }
 tossCoin();


 // example 2
 function shouldIDateHeer() {
    let value = Math.random();
    if(value < 0.5) {
       console.log('Yes, of course!!!');
    }else {
        console.log('No, he has a girlfriend!!!')
    }
 }
 shouldIDateHeer();

 // example 3

 let bills = [
    {value: 10000},
    {value: 20000},
    {value:200000, isFake: true},
    {value: 500000}
 ];
 function countBills (bills) {
    let total = 0;
    
    for( let bill of bills) {
        if(!bill.isFake){
            total += bill.value;
        }else {
            console.log('fake bill', bill);
        }
        
    }
    return total;
 }

 let total = countBills(bills);
 console.log(total);