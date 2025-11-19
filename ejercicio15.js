const contenedor = document.querySelector("#contenedor");
const parrafos = contenedor.querySelectorAll("p");

const parrafosOrdenados = Array.from(parrafos)
parrafosOrdenados.sort((a, b) => a.textContent.localeCompare(b.textContent));

parrafosOrdenados.forEach(parrafo => contenedor.appendChild(parrafo));