const div =document.querySelector('div');
let time = new Date();
// console.log(time.toLocaleTimeString());
div.textContent = time.toLocaleTimeString();
setInterval(() => {
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
}, 1000); 