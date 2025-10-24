function greet(){
  console.log("hlo ji, how are you")
}
//dance
function dance(callback){
  console.log("i am dancing ")
}
function meet(callback){
  console.log("I am going to meet someone");
  callback();
}
meet(greet);
meet(dance);