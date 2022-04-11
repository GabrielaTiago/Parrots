let numeroDeCartas;
let novasCartas = document.querySelector(ul);

const cards = [];
const imagensCards = [
    "imagens/bobrossparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/unicornparrot.gif"
];

inicioDoJogo();

function inicioDoJogo(){
    numeroDeCartas = Number(prompt("Bem vindo(a) ao Parrot Card Game! Digite o número de cartas par que você deseja jogar, este numero deverá ser entre 4 e 14: "));

    while (numeroDeCartas === null || numeroDeCartas < 4 || numeroDeCartas > 14 || (numeroDeCartas % 2) !== 0) {
        numeroDeCartas = Number(prompt("Digite um número par entre 4 e 14 para jogar!"));
    }
   adicionarCartas(); 
}

function adicionarCartas(){

    let addCartas = 0
    while(addCartas <= numeroDeCartas){
        novasCartas.innerHTML = `<li class="card"><img src="images/front.png" alt="papagaio"></li>`;
        addCartas++;
    }
}

cards.sort(comparador); // Após esta linha, a Array estará embaralhada
    
function comparador() { 
    return Math.random() - 0.5; 
}
