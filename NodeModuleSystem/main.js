
let Mouse = require('./mouse');

let Cat = require('./cat');

let mickey = new Mouse('black');
let jerry = new Mouse('orange');
console.log(mickey);
console.log(jerry);

let tom = new Cat();
tom.eat(mickey);
console.log(tom);

/**
 * node module - chia nhỏ module
 * 
 */