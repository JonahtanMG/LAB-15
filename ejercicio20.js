const section = document.querySelector("section");

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Título nuevo";
section.appendChild(nuevoH2);

const parrafo = document.createElement("p");
parrafo.textContent = "Descripción generada";
section.appendChild(parrafo);

const lista = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
    const item = document.createElement("li");
    item.textContent = "Item "+i;
    lista.appendChild(item);
}
section.appendChild(lista);
section.querySelectorAll("h2")[0].remove();
