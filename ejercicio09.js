const lista = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = "Elemento "+i;
    lista.appendChild(elemento);
}

const section = document.querySelector("section");
section.appendChild(lista);