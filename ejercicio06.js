const colores = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"];
const divs = document.querySelectorAll("div");

let posicionColor = 0;
for(const div of divs) {
    div.style.backgroundColor = colores[posicionColor];
    posicionColor++;
}