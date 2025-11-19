const lista = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    let elementoLista = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = "Nivel interno";
    
    elementoLista.appendChild(span);
    lista.appendChild(elementoLista);
}

document.body.appendChild(lista);