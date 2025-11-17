const lista = document.querySelectorAll("li");
for(elemento of lista){
    elemento.classList.add('resaltado');
    
    if(elemento.classList.contains('oculto')){
        elemento.classList.remove('oculto');
    }
};