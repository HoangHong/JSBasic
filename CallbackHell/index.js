// callback hell
const fs = require('fs');
// let song1 = fs.readFileSync('./song1.txt', {encoding: 'utf-8'} );
// let song2 = fs.readFileSync('./song2.txt', {encoding: 'utf-8'});
// let song3 = fs.readFileSync('./song3.txt', {encoding: 'utf-8'});
// console.log(song1, song2, song3);

fs.readFile('./song1.txt', {encoding: 'utf-8'}, (err, song1) => {
    console.log(song1);
    fs.readFile('./song2.txt', {encoding:'utf-8'}, (err2, song2) => {
        console.log(song2);
        fs.readFile('./song3.txt', {encoding: 'utf-8'}, (err3, song3) =>{
            console.log(song3);
        } );
    });
});

// promise