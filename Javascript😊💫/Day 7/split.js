let arr22=[23,4,"vishal",5,43,"ananya","annu",true,87];
console.log(arr22.splice(1,5)); 
console.log(arr22); 



const arr=[10,23,4,45,34,45,34,45,45,55];
const arr2=["rohit",11,13];
const arr4=[23,44,23,false];
// // arr.push(arr2);
// const arr3=arr.concat(arr2,arr4);
// const arr3=[arr,arr2,arr4];
// console.log(arr3);

const arr3=[...arr,...arr2,...arr4];
console.log(arr3);
