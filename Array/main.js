/***
 *  Array in JavaScript
 *  terms: array, element, index, length
 * - dùng để lưu trữ 1 list các phần tử giống nhau
 * 
 * 
 * **/

 let dog1 = {
     type: 'chó ta'
 };
 let dog2 = {
    type: 'lạp xưởng'
};
let dog3 = {
    name: 'Đần',
    type: 'husky'
};

let bunchOfDogs = [dog1, dog2, dog3];
console.log(bunchOfDogs);
// truy xuat phan tu trong mang

console.log(bunchOfDogs[2]);
console.log(bunchOfDogs[2].name);


// thay đổi phần tử trong mảng

let dog4 = {
    type: 'Shiba'
};
bunchOfDogs[0] = dog4;
console.log(bunchOfDogs);