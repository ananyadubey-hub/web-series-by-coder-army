let obj = { name: "Ananya", age: 23 }; // stored in heap
let arr = [1, 2, 3, 4];                 // stored in heap

let anotherObj = obj; // reference copied in stack
anotherObj.age = 24;

console.log(obj.age); // 24
