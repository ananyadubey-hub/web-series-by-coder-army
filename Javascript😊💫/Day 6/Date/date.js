// const now=new Date();
// console.log(now);
// // hm log ke time ke cording krne ke liy tostring bus add kr  dete h

const now1=new Date();
// console.log(now1.toString());
// console.log(now1.toISOString());
// console.log(now1.toLocaleString());

console.log(now1.getDay());
console.log(now1.getDate());
console.log(now1.getMonth());
console.log(now1.getFullYear());
console.log(now1.getTimezoneOffset());
console.log(now1.getHours());
console.log(now1.getMinutes());
console.log(now1.getSeconds());


// year,date, month,date,hours,minute,second,milisecond

// const now =new Date(2025,10,5,10,52,50,100);
// console.log(now.toLocaleString());
// console.log(now.toString());

//milisecond convert to current date and times
// const now = Date.now();
// const dates=new Date(
// 1759645415494
// )
// console.log(dates.toDateString());
// console.log(dates.toLocaleString());


const now = Date.now();
const dates=new Date(0)
console.log(dates.toDateString());
console.log(dates.toLocaleString());