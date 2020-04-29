// node co

const fs = require('fs');
const co = require('co');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        });
    });
}

// co(function *() {
//     // let song1 = yield readFilePromise('./song1.txt');
//     // let song2 = yield readFilePromise('./song2.txt');
//     // let song3 = yield readFilePromise('./song3.txt');
//     let values = yield [    
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song2.txt')
//     ]
//     return values;
// }).then((values) => {
//     console.log(values);
// }).catch((err) => {
//     console.log(err);
// });

// trả về 1 hàm
const  readFiles = co.wrap(function*(files){
    // [string] -> [promise]
    let values = yield files.map((file) => {
        return readFilePromise(file);
    });
    return values;
});

readFiles(['./song1.txt', './song2.txt', './song3.txt'])
    .then((values) => {
        console.log(values);
    })