/** 
 * ========= new keyword
 * 
 * */ 

 let today = new Date();
 console.log(today);

// create a new object , object literal
let mouse = {
    weight: 0.2,
    getWeight: function() {
        return this.weight;
    }
};
console.log(mouse.getWeight());


// constructor function 
function Mouse(color) {
    this.type = 'mouse';
    this.color = color;
}

let mouse1 = new Mouse('white');
let mouse3 = new Mouse('black');
let mouse2 = {
    type: 'mouse',
}
console.log(mouse1);
console.log(mouse3);
console.log(mouse2);


// bai tap 

let tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this;
    }
}
let m1 = {name: 'm1'};
let m2 = {name: 'm2'};
let m3 = {name: 'm3'};
// tom.eat(m1).eat(m2).eat(m3);// method chaining
// console.log(tom);

// dùng constructor viết lại những con chuột

function MouseBT(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
}
let ms1 = new MouseBT('ms1', 'white', 0.2);
let ms2 = new MouseBT('ms2', 'brown', .5);
let ms3 = new MouseBT('ms3', 'pink', 0.3);
tom.eat(ms1).eat(ms2).eat(ms3);
console.log('Tom: ',tom);
