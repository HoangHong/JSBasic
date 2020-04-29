/**
 * 
 * Data types Object 
 * dùng để mô tả đối tượng nào đó 
 */

//  let a = {
//      key: value
//  };

let myDog = {
    name: 'Lợn',
    weight: 5.2,
    isAlive: false
};
console.log(myDog);


let myBestFriend = {
    nickName: 'Chó',
    age: 28,
    gender: 'male'
};

// camelCase -- google

let a = {};

// truy xuất và thay đổi dữ liệu
console.log(myDog.name);// cach 1( hay dung)
console.log(myDog['name']);// cach 2

// thay doi du lieu

myDog.weight = 10;
console.log(myDog.weight);

