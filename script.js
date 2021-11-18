let contarMenos = document.querySelector(".botaoSubtrair");
let contarMais = document.querySelector(".botaoSomar");
let contadorDisplay = document.querySelector(".contador"); 

let contar = 0;

atualizarDisplay();

contarMais.addEventListener("click",()=>{
    contar++;
    atualizarDisplay();
});

contarMenos.addEventListener("click",()=>{
    contar--;
    atualizarDisplay();
});

function atualizarDisplay(){
    contadorDisplay.innerHTML = contar;
};
