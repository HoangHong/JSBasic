const fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        });
    } );
}

// async await

async function run() {
    let song1 = await readFilePromise('./song1.txt');
    let song2 = await readFilePromise('./song2.txt');
    console.log(song1, song2);
    return[song1, song2];
}
run()
    .then((values) => {
        console.log(values);
    });