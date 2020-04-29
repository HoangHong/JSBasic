/**
 * 
 * ============ Math object in JS
 * Math.PI
 * Math.ceil(number): làm tròn lên
 * Math.floor(nubmer): làm tròn xuống
 * Math.round(number): 
 * Math.max(x1, x2, x3, ...)
 * Math.min(x1, x2, ...)
 * Math.random()
 * 
 */

 // s = r * r * 3.14

 function disArea(r) {
     return r * r * Math.PI;
 }
 let s = disArea(5);
 console.log(s)

 console.log(Math.ceil(9.2));// 10
 console.log(Math.floor(9.7));// 9

 console.log('Random: ', Math.random());

 function tossACoin() {
     let random = Math.random();
     console.log(random);
     return random > 0.5;
 }

 console.log('Mặt sấp: ', tossACoin());

 // bài tập 

 function rollADie() {
     // 1, 2, 3, 4, 5, 6
     let random = Math.random() * 6;
     console.log(Math.floor(random) + 1);
 }
 rollADie();// 1 -6