// // console.log("Hlo CODER army1");
// const newElement = document.createElement("h2");

// const { Fragment } = require("react/jsx-runtime");

// newElement.innerText = "MY NAME IS ANANYA DUBEY 1 IN JS";
// newElement.style.color = "black";
// newElement.style.backgroundColor = "pink";
// newElement.style.textAlign = "center";
// newElement.textContent="Strike is coming soon and Diwali is also coming soon";
// newElement.id ="second";
// //select element where we want to add this element
// const parentElement = document.getElementById("first");
// parentElement.after(newElement);
// const parentElement1 = document.createElement("h3");
// parentElement1.textContent = "This is created by dubey";
// parentElement1.style.color = "white";
// parentElement1.style.backgroundColor = "purple";
// newElement.id="third";
// newElement.className="third";
// newElement.style.textAlign = "center";
// parentElement.after(parentElement1);
// // parentElement.before(parentElement1);
// newElement.classList.add("diwali");
// newElement.classList.add("strike");
// // newElement.classList.remove("strike");
// newElement.fontsize = "50px";
// newElement.style.margin = "20px";
// newElement.style.padding = "20px";
// newElement.style.border = "2px solid black";  
// newElement.style.borderRadius = "10px";
// newElement.style.fontFamily = "cursive";
// newElement.style.boxShadow = "5px 10px #888888";
// newElement.style.transition = "all 0.3s ease-in-out";
// newElement.style.cursor = "pointer";
// newElement.onmouseover = function() {
//     newElement.style.backgroundColor = "blue";
//     newElement.style.color = "white";
// };  
// newElement.onmouseout = function() {
//     newElement.style.backgroundColor = "pink";
//     newElement.style.color = "black";
// }
// newElement.onclick = function() {
//     newElement.style.backgroundColor = "green";
//     newElement.style.color = "white";
// }
// newElement.ondblclick = function() {
//     newElement.style.backgroundColor = "red";
//     newElement.style.color = "white";
// } 
// newElement.style.opacity = "0.8";
//   newElement.style.fontWeight = "bold";
// // newElement.style.textDecoration = "underline";
// newElement.style.textShadow = "2px 2px #ff0000";
// // newElement.style.visibility = "hidden";    
// // newElement.style.display="none";
// newElement.style.whiteSpace = "pre-wrap"; // To preserve whitespace and line breaks
// newElement.style.wordWrap = "break-word"; // To break long words
// newElement.style.letterSpacing = "2px"; 
// newElement.style.lineHeight = "1.5";
// newElement.style.fontSize = "24px"; 
// newElement.style.maxWidth = "600px";  
// newElement.style.margin = "20px auto"; // Center align with auto margins
// newElement.style.padding = "20px"; 
// newElement.style.border = "2px solid black";    
// newElement.style.borderRadius = "10px"; 
// newElement.style.boxShadow = "5px 10px #888888";  
// newElement.style.transition = "all 0.3s ease-in-out"; 
// newElement.style.transform = "scale(1)";
// newElement.style.cursor = "pointer";    
// console.log(newElement);

// console.log(parentElement1.getAttribute("id"));
// console.log(newElement.hasAttribute("class"));
// console.log(newElement.getAttribute("class"));
// console.log(newElement.classList);    



// //list element 
// const listElement = document.createElement("li");
// listElement.textContent = "Milk";

// const listElement1 = document.createElement("li");
// listElement1.textContent = "Fruit";
// const listElement2= document.createElement("li");
// listElement2.textContent = "Fruit   juice";
// const listElement3= document.createElement("li");
// listElement3.textContent = "Vegetable";
// const listElement4= document.createElement("li");
// listElement4.textContent = "apple";
// const listElement5= document.createElement("li");
// listElement5.textContent = "Honey";

// const unorder =document.getElementById("list");
// listElement.style.color = "white";
// listElement.style.backgroundColor = "grey";
// listElement.style.padding = "10px";
// listElement.style.margin = "5px";
// listElement.style.borderRadius = "5px";
// listElement.style.listStyleType = "circle";
// unorder.append(listElement);
// listElement1.style.color = "black";
// listElement1.style.backgroundColor = "pink";
// listElement1.style.padding = "10px";
// listElement1.style.margin = "5px";
// listElement1.style.borderRadius = "5px";
// listElement1.style.listStyleType = "circle";
// unorder.append(listElement1,listElement5);
// // unorder.append(listElement5);
// unorder.append(listElement2);
// unorder.append(listElement4);
// unorder.append(listElement3);




// const listElement1 = document.createElement("li");  
// listElement.textContent = "Milk";
// const unorder =document.getElementById("list");

// unorder.appendChild(listElement);



//array method to create list
// const items = ["Milk", "Fruit", "Vegetable", "apple", "Honey"];
// const unorder = document.getElementById("list");
// const Fragment = document.createDocumentFragment();
// for (let food of items ) {
//     const listElement = document.createElement("li");
//     listElement.textContent = items[i];
//     Fragment.appendChild(listElement);
//     // listElement.style.color = "black";
//     // listElement.style.backgroundColor = "aqua";
//     // listElement.style.padding = "10px";
//     // listElement.style.margin = "5px";
//     // listElement.style.borderRadius = "5px";
//     // listElement.style.listStyleType = "circle";
   
// // }   
// unorder.appendChild(Fragment);


// Using DocumentFragment
const items = ["Milk", "Fruit", "Vegetable", "Apple", "Honey"];
const unorder = document.getElementById("list");

// Step 1 — Create a virtual container (DocumentFragment)
const fragment = document.createDocumentFragment();

// Step 2 — Loop through array items
for (let food of items) {
  const listElement = document.createElement("li"); // create <li>2
  listElement.textContent = food; // set text to array item
  fragment.appendChild(listElement); // add li to fragment (not the real DOM yet)
}

// Step 3 — Add all list items to the real DOM in one go
unorder.appendChild(fragment);


// remove element
const list = document.getElementById("list");
list.remove(); // removes the entire list