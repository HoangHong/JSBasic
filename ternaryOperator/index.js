/**
 * 
 * // ternary operator 
 * 
 * condition ? expression when true : expression when false
 */

 function tossCoin() {
     let value = Math.random();
     (value < 0.5) ? console.log('Mặt sấp!!!!') : console.log('Mặt ngửa!!!');
 }
 tossCoin();