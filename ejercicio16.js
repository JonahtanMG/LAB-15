const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
    sections[i].setAttribute("data-index", i);
}