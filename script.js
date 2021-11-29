const display = document.getElementById("contador");

let contar = 0;

function somar(){
    contar++
    display.innerText = contar
} 

function subtrair(){
    contar--
    display.innerText = contar
} 
function reset(){
    contar = 0;
    display.innerText = contar 
}