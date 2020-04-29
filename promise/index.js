/**
 * module promsie (npm)
 * 
 */
// let fs = require('promise-fs');
// function onDone(song) {
//     console.log(song)
// }
// function onError(error) {
//     console.log(error)
// }
// function readFile(path) {
//     return fs.readFile(path, {encoding: 'utf-8'});
// }
// readFile('./song1.txt')
//     .then(onDone)
//     .then(() => {
//         return readFile('./song2.txt')
//     })
//     .then(onDone)
//     .catch(onError)

let fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
            if(err) {
                reject(err);
            }else {
            resolve(data);
            }

        });
    })
    
}
readFilePromise('./song1.txt')
    .then((song1) => {
        console.log(song1);
    })
    .catch((error) => {
        console.log(error);
    })