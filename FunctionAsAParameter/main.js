/**
 * == function as a parameter - callback
 * 
 * 
 */

 function sum(a, b) {
     return a + b;
 }
 sum(2, 3);// number, string, true, array, object


 let coffeeMachine = {
     makeCoffee: function(onFinish) {
         console.log('Making coffee....');
         onFinish();// gọi hàm
     }
 };
//  coffeeMachine.makeCoffee();

 // khi thực hiện 1 việc không biết cụ thể nào đó 
 // truyền tham số như 1 hàm 
 // thường dùng on trước để đặt tên

 let beep = function() {
     console.log('Tít Tít');
 }

 coffeeMachine.makeCoffee(beep);// chỉ cần truyền hàm vào vì nó nhận tham số là một hàm

 // cach khac 

 coffeeMachine.makeCoffee(function(){
     console.log('Bíp Bíp');
 })