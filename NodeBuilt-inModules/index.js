/**
 * 
 * node built-in modules
 */

 // đọc file 
//fs.readlinkSync(path[, options])
let fs = require('fs');

let text = fs.readFileSync('./song.txt', {encoding: 'utf-8'});
console.log(text);


// ghi file
// fs.writeFileSync(file, data[, options])

fs.writeFileSync('./song2.txt', 'I\'m hong');
let text2 = fs.readFileSync('./song2.txt', {encoding: 'utf-8'});
console.log(text2);