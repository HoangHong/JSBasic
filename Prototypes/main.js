/**
 * ========= prototypes in JS
 * 
 * - prototype object is shared among all the object 
 * created using new
 * 
 *  object.prototype 
 * object.prototype.constructor
 * 
 * *****  constructor function & a normal function 
 * 
 * * ======= contructor function 
 * - being used with NEW
 * - in order to create new object 
 * - function name í a Noun with first character upercased
 * 
 * ex: function Mouse() {
 * }
 * let mickey = new Mouse()
 * 
 * ============= normal function 
 * - being called perform some specific task 
 * - function name is a verb following camlCase convention 
 * 
 * function sayHello() {
 *      console.log('Hello');
 * }
 * sayHello();
 * 
 */


 // contructor function 
 function Mouse(color, weight) {
     this.color = color;
     this.weight = weight;
 } 
 console.log(Mouse.prototype);
 console.log(Mouse.prototype.constructor);
 console.log(Mouse.prototype.constructor === Mouse);
// thêm methods cho object
 Mouse.prototype.sleep = function() {
     console.log(this.color + ' Sleeping....');
 }
 let jerry = new Mouse('Orange', 20);
 console.log(jerry);
 // có thể truy xuất vào sleep() 
 // vì prototype có thể share cho tất cả các đối tượng sửa dụng new

 jerry.sleep();

 let mickey = new Mouse('White', 10); 
 mickey.sleep();
 // dùng nó tiết kiệm bộ nhớ hơn, nó cùng trỏ tới function sleep
