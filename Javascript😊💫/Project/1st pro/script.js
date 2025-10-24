const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The best way to predict the future is to create it.",    
  "You miss 100% of the shots you don't take.",
  "Your time is limited, don't waste it living someone else's life.",
  "The only way to do great work is to love what you do.",  
  "If you can dream it, you can achieve it.",
  "Believe you can and you're halfway there.",
  "The only impossible journey is the one you never begin.",  
  "It always seems impossible until it's done.",
  "You must be the change you wish to see in the world.",
  "Dream big and dare to fail.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is walking from failure to failure with no loss of enthusiasm.",   

  "You are never too old to set another goal or to dream a new dream.", 
  "It does not matter how slowly you go as long as you do not stop.",
  "Act as if what you do makes a difference. It does.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Opportunities don't happen, you create them.",
  "Don't watch the clock; do what it does. Keep going."
];
const button = document.querySelector('Button');
const quote = document.querySelector('h1');     

button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * 20);  
  quote.textContent = quotes[index];
  

});