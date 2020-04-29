/**
 * 
 *  if...else if... else
 * syntax 
 * if(condition) {
 *      // statement
 * }else if(condition 1) {
 * 
 *      // statement1
 * }else if(condition 2){
 *      // statement2
 * }else{
 *      // statement3
 * }
 * 
 */

 // example: calculate bus ticket fee( phí)

 // if age < 15, discount 20%
 // if age > 60, discount 10%
 // otherwise(khác) 10000/ticket

 function getTicketFee(person) {
     let basePrice = 10000;
     if(person.age < 15) {
         return 10000 * 0.8;
     }else if(person.age > 60) {
         return 10000 * 0.9;
     }else {
         return basePrice;
     }

 }
 let person = {
     age: 16
 };
 let fee = getTicketFee(person);
 console.log(fee);