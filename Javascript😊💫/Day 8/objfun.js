const user11= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++",
  greeting:function(){
    console.log(`strike is coming soon ${user11.name},${user11.age},${user11.college}`);
    return 20;
  }
}
const va = user11.greeting();
console.log(va);

//netsed object
const user12= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++",
  address:{
    city:"gkp",
    destric:"gorakhpur",
    state:"up"
  }
}
// console.log(user12.address.city);


// //spred oprator use jo user1 & user2 diffrent ho
// const user13= {
//   name: "ananya",
//   age: 10,
//   email: "dubeyananya769@gmail.com",
//   number: 7905691727,
//   accountnum: 129888983489489,
//   college: "ggpg gorakhpur",
//   qualification: "diploma-complete",
//   grade: "A++",
//   address:{
//     city:"gkp",
//     destric:"gorakhpur",
//     state:"up",
//   }
// }
// const user14={...user13};
// user14.name="annnnnn";
// console.log(user13);
//independant copy//shallow copy
const user13= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++",
  address:{
    city:"gkp",
    destric:"gorakhpur",
    state:"up",
  }
}
const user15={...user13};
user15.address.city="delhi";
console.log(user13);


//deep copy jise ki nested obj ke new refrence bne
const user= {
  name: "ananya",
  age: 10,
  email: "dubeyananya769@gmail.com",
  number: 7905691727,
  accountnum: 129888983489489,
  college: "ggpg gorakhpur",
  qualification: "diploma-complete",
  grade: "A++",
  address:{
    city:"gkp",
    destric:"gorakhpur",
    state:"up",
  }
}
const user2=structuredClone(user);
user2.address.city="dwarka";
console.log(user);
//number keys

const user1= {
  name: "ananya",
  age: 10,
 2: "dubeyananya769@gmail.com",
 0: 7905691727,
  1: 129888983489489,
  college: "ggpg gorakhpur",
 10: "diploma-complete",
  grade: "A++",
  7:{
  8:"gkp",
    9:"gorakhpur",
    11:"up",
  }
}

console.log(user1[7]);