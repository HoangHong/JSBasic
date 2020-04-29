/**
 * ================ object methods
 * this là keyword, dung trong ngữ cảnh methods
 * dại diện cho chính đối tượng đó
 * 
 */

 const myDog = {
    weight: 5,
    name: 'Đần',
    age: 1,
    bark: function() {
        console.log('Meo Meo, my name is', this.name);
    },
    eat: function(bone) {
        this.weight = this.weight + bone.weight;
        return this;
    }

 };
console.log(myDog);
console.log(myDog.bark());
 // anonymous function( ham khong ten)


//  function bark() {
//      console.log('ụt ịt')
//  }
//  bark();

let bone = {
    weight: 0.5
};


console.log('Before eating: ',myDog.weight);
myDog.eat(bone);
console.log('After eating',myDog.weight );