const article = document.querySelector("article"); 
const main = document.querySelector("main");
const clon = article.cloneNode(true);
main.appendChild(clon);