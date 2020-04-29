/**
 * ========= array methods
 * 
 * 1. a.concat(b): nối 2 chuỗi
 * 2. a.push(b): thêm 1 phần tử vào cuối
 * 3. a.pop(): xóa phần tử ở cuối mảng
 * 4. a.shift(): xóa phần tử vào đầu mảng
 * 5. a.unshift(): thêm phần tử ở đầu mảng
 * 6. a.slice(start, end): sao chép mảng
 * 7. a.splice();// xóa or thay thế  phần tử trong mảng
 * 
 */

 let a = [1, 3, 2];
 console.log(a.length);
 let b = [10, 20];
 console.log( a.concat(b));// trả về mảng mới 


 // ======== push() 
//  console.log(a.push(5));// trả về độ dài mảng
//  console.log(a);// mảng a thay đổi


//========== pop()

// console.log(a.pop());// trả về phần tử cuối mảng bị đẩy ra
// console.log(a);// mảng a bị thay đổi


// ============= shift()

// console.log(a.shift());// trả về phần tử đầu mảng bị đẩy ra
// console.log(a);// mảng a bị thay đổi

// ========== unshift()

// console.log(a.unshift(6));// trả về độ dài mảng
// console.log(a);// mảng a bị thay đổi