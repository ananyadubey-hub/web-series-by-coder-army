// const user={
// name:"ananya",
// age:10,
// email:"dubeyananya769@gmail.com",
// number:7905691727,
// accountnum:129888983489489,
// collge:"ggpg gorakhpur",
// qualifcation:"diploma-complit ",
// //insert(crete)
// grade:"a++";
// //update
// collge:"ddu";
// //delete
// delete user.email;

// }
// console.log( user);


//chatgp
const user = {

  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
};

// ✅ Update
user.college = "DDU";

// ✅ Delete
delete user.email;

// ✅ Insert (add new key)
user.city = "Gorakhpur";
user.Home = "Khajani Gkp";

console.log(user["name"]);
console.log(user["number"]);
console.log(user["age"]);
const user2=user;
user2.age=80;
user2.name="ananyadubey";
console.log(user);












//only keyy find method
const user = {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"

}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));



//for loop


// ✅ Create user object
const user1= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
}


// ✅ for...in loop to print key & value pairs
console.log("Using for...in loop:");
for (let key in user1) {
  console.log(key, ":", user1[key]);
}


const arr=[10,34,34,56,43,343,56,8];
console.log(arr[1,3]);


//value for loop


const user12= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
}
for(let values of Object.values(user12)){
  console.log(values);
}


//value for loop

const user11= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
}
for(let keys of Object.keys(user11)){
  console.log(keys);
}
//both find 



//value for loop

const user13= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
}
for(let entries of Object.entries(user13)){
  console.log(entries);
}


//entires descturturing krne ke liy wrna yh ek array return krta h na
//both find 



//value for loop

const user14= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++"
}
for(let [keys,values]of Object.entries(user14)){
  console.log(keys,values);
}