const parent = document.getElementById('parent');

parent.addEventListener('click', (event) => { 
// console.log(event.target);
const child =event.target;
// document.body.style.backgroundColor = child.style.backgroundColor;
const body = document.querySelector('body');
body.style.backgroundColor = child.id;
  }) 
