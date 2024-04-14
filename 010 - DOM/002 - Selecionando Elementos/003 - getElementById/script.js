"use strict";

// Retorna o Elemento com o ID selecionado
const p = document.querySelectorAll("p");
 
p.forEach((Element,index) =>{
    Element.style.color = "#FFF";
    Element.style.padding = "20px";

    if (index ===0) {
        Element.style.background = "blue";
    }

    if (index === 1) {
        Element.style.background = "red"
    }
})