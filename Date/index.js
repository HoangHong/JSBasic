const moment = require('moment');
moment().format();
// Date
// moment.js
// let now = new Date();
// let myBirthDay = new Date(1990, 4, 17);// 17-5-1990
// // thang se bat dau tu 0 -11
// // Date la mot khoang khac nhat dinh
// // luu tru number of milliseconds from 1-1-1970  
// console.log(now.getTime());
// console.log(myBirthDay.getTime());
// // tra ve so milliseconds

// ========= moment.js============

// tra ve 1 object
let now = moment('2020-08-12 07:00');
console.log(now.fromNow());
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
