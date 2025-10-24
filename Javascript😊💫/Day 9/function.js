function greeting(){
  console.log("Hlo coder army");
}



// greeting();
console.log(greeting());

//add
function add(num1,num2){
  const sum = num1+num2;
  console.log(sum);
}

add(3,4);
add(5,4);
add(91,4);

add(103,4);
add(3334,4);




//arrow function

()=>{

}

//2
const addNum=()=>{
  console.log("Hlo ji");
}
addNum();

const addNum1=(num1,num2)=>{
  return num1+num2;

}
console.log(addNum1(3,4));

//simple value return no clurly braces no return keyword
const addNum2=(num1,num2)=> num1+num2;
const squareNumber = num=>num*num;
console.log(addNum2(32,34));
console.log(squareNumber(5));


//
const address=()=>({
  name:"ananya",
  age:20,
  clg:"ggpg",
  
})
console.log(address());

//envoke function
(function env(){
  console.log("hlo dear")
})();
