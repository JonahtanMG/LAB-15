const h3 = document.createElement("h3");
h3.textContent = "Texto h3";
const p = document.querySelector("p");
p.parentNode.insertBefore(h3,p);