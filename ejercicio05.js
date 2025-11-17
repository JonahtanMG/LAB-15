const padre = document.getElementById("lista");

for(const hijo of padre.children) {
    console.log(hijo.textContent);
}