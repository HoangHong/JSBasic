// setInterval
// clearInterval
//setInterval(fn, ms)// gọi fn sau mỗi ms

// let i = 0;
// let intervalId = setInterval(() => {
//     i++;
//     console.log(i);
//     if( i === 10) {
//         clearInterval(intervalId);
//     }
// }, 1000)

// write a fn count from 1 to 10 
// return a promise

function countFrom(a, b) {
    return new Promise((resolve) => {
        let i = a;
       
        let intervalId =  setInterval(() => {
                if(a <= b) {
                    console.log(a);
                    a++;
                    
                }else {
                    resolve();
                    clearInterval(intervalId);
                }
                // resolve();
            }, 1000);
            
       
        
    } );

}
countFrom(1, 10)
    .then(() => {
        console.log('Done')
    })