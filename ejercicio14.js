const lista = document.querySelector("ul");
const elementos = lista.querySelectorAll("li"); 

let guardar = elementos[0].textContent;
elementos[0].textContent = elementos[elementos.length - 1].textContent;
elementos[elementos.length - 1].textContent = guardar;
