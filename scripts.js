let numberOfCards;
let newCards = document.querySelector(ul);

const cards = [];
const imagesCards = [
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
    numberOfCards = Number(prompt("Bem vindo(a) ao Parrot Card Game! Digite o número de cartas par que você deseja jogar, este numero deverá ser entre 4 e 14: "));

    while (numberOfCards === null || numberOfCards < 4 || numberOfCards > 14 || (numberOfCards % 2) !== 0) {
        numberOfCards = Number(prompt("Digite um número par entre 4 e 14 para jogar!"));
    }
   adicionarCartas(); 
}

function adicionarCartas(){

    let addCards = 0
    while(addCards <= numberOfCards){
        newCards.innerHTML += `
        <li class="card"><img class="frente" src="images/front.png" alt="papagaio"></li>
        <li class="card"><img class="verso" src="${imagesCards[i]}" alt="imagem-selecionada"></li>
        `;
        addCards++;
    }
}
function mixCards(){
    imagesCards.sort(comparador); // Após esta linha, a Array estará embaralhada      
    function comparador() { 
        return Math.random() - 0.5; 
    }
}