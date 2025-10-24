const result = document.getElementById("result");
let count = 10;

const timer = setInterval(() => {
  if (count > 0) {
    result.innerHTML = `The Olympic games will start in ${count} seconds`;
    count--;
  } else {
    result.innerHTML = "The Olympic games have started!";
    clearInterval(timer);
  } 
}, 1000);

