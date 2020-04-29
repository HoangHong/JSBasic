// setTimeOut
// clearTimeout


//setTimeout(fn, ms);// milliseconds
// khi ms = 0, fn sẽ được chạy
console.log('start');
let  timeoutId = setTimeout(() => {
    console.log('Finish')
}, 1000);
console.log('Done');
clearTimeout(timeoutId);// hủy bỏ hàm setTimeout