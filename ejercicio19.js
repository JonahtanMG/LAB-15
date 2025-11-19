const contenedor = document.createElement("div");
contenedor.id = "contenedor";

for (let i = 1; i <= 3; i++) {
    let parrafo = document.createElement("p");
    parrafo.textContent = "Parrafo "+i;
    parrafo.id = "parrafo-"+i;
    contenedor.appendChild(parrafo);
}

document.body.appendChild(contenedor);

document.getElementById("parrafo-2").remove();