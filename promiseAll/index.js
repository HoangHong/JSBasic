const fs = require('fs');


function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}
// readFilePromise('./song1.txt')
//     .then((song1) => {
//         console.log(song1);
//         return readFilePromise('./song2.txt');
//     })
//     .then((song2) => {
//         console.log(song2);

//         return readFilePromise('./song3.txt');
//     })
//     .then((song3) => {
//         console.log(song3);
//     })

// khong quan tâm thứ tự đọc 3 file ntn? dùng promise all

Promise.all(
    [
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt'),
        readFilePromise('./song1.txt')
    ]
).then((values) => {
    console.log(values);
}).catch((error) ={
    console.log(error);
});