const cantidadDivs = document.querySelectorAll("div").length;

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hay "+cantidadDivs+" divs";

document.body.appendChild(nuevoParrafo);