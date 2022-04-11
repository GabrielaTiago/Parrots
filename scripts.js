let numberOfCards;
let newCards = document.querySelector("ul");

let cards = [];
let imagesCards = [
    "images/bobrossparrot.gif",
    "images/explodyparrot.gif",
    "images/fiestaparrot.gif",
    "images/metalparrot.gif",
    "images/revertitparrot.gif",
    "images/tripletsparrot.gif",
    "images/unicornparrot.gif"
];

inicioDoJogo();

function comparador() { 
    return Math.random() - 0.5; 
}




function inicioDoJogo(){
    numberOfCards = Number(prompt("Bem vindo(a) ao Parrot Card Game! Digite o número de cartas par que você deseja jogar, este numero deverá ser entre 4 e 14: "));

    while (numberOfCards === null || numberOfCards < 4 || numberOfCards > 14 || (numberOfCards % 2) !== 0) {
        numberOfCards = Number(prompt("Digite um número par entre 4 e 14 para jogar!"));
    }
   seeCards(); 
}
function seeCards(){
    imagesCards.sort(comparador); 
    cards = imagesCards.slice(0, numberOfCards/2);
    cards = cards.concat(cards);
    cards.sort(comparador); 
    console.log(cards);
    adicionarCartas();
}

function adicionarCartas(){
    let addCards = 0
    while(addCards < numberOfCards){
        newCards.innerHTML += `
        <div class="cards" onclick="clickCards(this)">
            <li class="face front-face"><img src="images/front.png" alt="papagaio"></li>
            <li class="face back-face"><img src="${cards[addCards]}" alt="imagem-selecionada"></li>
        </div>
        `;
        console.log(cards);
        addCards++;
    }
}




function clickCards(teste){
    teste.classList.add("flipped")
}