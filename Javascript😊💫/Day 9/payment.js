
// function zamatoPlaceOrder(){
//   console.log(`we have starting preparing your order`) 
 
// }

// function payment(amount){
//   console.log(`${amount} payment has received`)
//   console.log("payment is done succesfully");
//   zamatoPlaceOrder();

// }
// payment(500);
//callback exples
//blinkit

function blinkitOrderPlaced(){
  console.log(`we have starting packaging your food`) 
 
}

function zamatoPlaceOrder(){
  console.log(`we have starting preparing your order`) 
 
}

function payment(amount,callback){
  console.log(`${amount} payment has received`)
  console.log("payment is done succesfully");
  

}
// payment(500,zamatoPlaceOrder);
payment(400,blinkitOrderPlaced);