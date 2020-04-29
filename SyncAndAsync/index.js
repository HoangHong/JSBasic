/**
 * 
 * Sync & async ( synchoronous and asynchoronous) - đồng bộ và không đồng bộ
 * 
 * 
 */

 const fs = require('fs');

// console.log('Start');
// let song1 = fs.readFileSync('./song1.txt',{encoding: 'utf-8'});
// console.log(song1);
// let song2 = fs.readFileSync('./song2.txt', {encoding: 'utf-8'});
// console.log(song2);

// console.log('End');

// make coffee -> 5 minutes
// wear colthes
// making bed


//========== sync =============
// |------------------|-----------------|-------------------|----------->
// make coffe        coffee done       wear done               done
//                   wear colthes      make bed(dọn giường)

// ================ Async ===============
//   wear colthes
// |-|--------------|-------------|----------------------------------------->
// make coffee      make bed       done

// hàm fs.readFile(là không đồng bộ)

console.log('Start');
fs.readFile('./song1.txt', {encoding: 'utf-8'}, (err, song1) => {
    console.log(song1);
});
console.log('End')

// read/write to FS
// network