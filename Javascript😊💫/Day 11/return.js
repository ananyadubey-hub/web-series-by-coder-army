// function createCounter(){


//   function increment(){
  
//     console.log("I am increment function")
//   }
//   increment();
// }
//  createCounter();



 //
 function createCounter(){

let count = 0;
  function increment(){
    count++;
    return count;
  
  
  }
  return increment;
}
 const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
