// scope 
//  1. global scope
// 2. local scope
// when a function iss executed -> create a new scope
let a = 1;
function random() {
    let b = Math.random();
    console.log(b);
    console.log(a);
}
random();