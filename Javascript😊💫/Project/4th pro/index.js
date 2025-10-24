
// const form = document.querySelector('form');
// form.addEventListener('submit' (event) => {
//   const income = document.querySelector('#income');
//   const amount = parseInt(income.value);
//  const result = document.querySelector('h2');
//  if (amount <= 1000000) 
//   totalTax=0;
// else if (amount <= 2000000)
//   totalTax= (amount - 1000000) * 0.05;
// else if (amount <= 3000000) 
//   totalTax= (1000000 * 0.05) + (amount - 2000000) * 0.10;
// else 
//   totalTax= (1000000 * 0.05) + (1000000 * 0.10) + (amount - 3000000) * 0.15;  
//   result.innerText = `The total tax payable is: ₹${totalTax}`;
//   event.preventDefault(
// )}


const form = document.querySelector('form');

form.addEventListener('submit', (event) => { // Added missing comma
  event.preventDefault(); // Prevent form submission at the start

  const income = document.querySelector('#income');
  const amount = parseInt(income.value);
  const result = document.querySelector('h2');
  let totalTax = 0; // Declare totalTax

  if (amount <= 1000000) {
    totalTax = 0;
  } else if (amount <= 2000000) {
    totalTax = (amount - 1000000) * 0.05;
  } else if (amount <= 3000000) {
    totalTax = (1000000 * 0.05) + (amount - 2000000) * 0.10;
  } else {
    totalTax = (1000000 * 0.05) + (1000000 * 0.10) + (amount - 3000000) * 0.15;
  }

  result.innerText = `The total tax payable is: ₹${totalTax}`;
});
