const MINIMUM_NUMBER_OF_CARDS = 4;
const MAXIMUM_NUMBER_OF_CARDS = 14;

let numberOfCards;
let newCards = document.querySelector("ul");
let check = document.querySelectorAll(".flipped");
let first;
let second;
let contador = 0;

let cards = [];
let imagesCards = [
  "src/assets/images/bobrossparrot.gif",
  "src/assets/images/explodyparrot.gif",
  "src/assets/images/fiestaparrot.gif",
  "src/assets/images/metalparrot.gif",
  "src/assets/images/revertitparrot.gif",
  "src/assets/images/tripletsparrot.gif",
  "src/assets/images/unicornparrot.gif",
];

startGame();

function comparador() {
  return Math.random() - 0.5;
}

function startGame() {
  const startPromptMessage = `Bem vindo(a) ao Parrot Card Game! 🤗🦜\n
  Digite um número par de cartas que você deseja jogar.\n
  Este número deverá ser entre ${MINIMUM_NUMBER_OF_CARDS} e ${MAXIMUM_NUMBER_OF_CARDS}`;
  const errorPromptMessage = `Opção inválida 🙁\n
    Digite um número par entre ${MINIMUM_NUMBER_OF_CARDS} e ${MAXIMUM_NUMBER_OF_CARDS} para jogar!`;

  numberOfCards = parseInt(prompt(startPromptMessage));

  while (validatesTheNumberOfCards() === false) {
    numberOfCards = parseInt(prompt(errorPromptMessage));
  }

  seeCards();
}

function validatesTheNumberOfCards() {
  const isEven = numberOfCards % 2 === 0;
  const isGreaterThanMinimum = numberOfCards >= MINIMUM_NUMBER_OF_CARDS;
  const isLessThanMaximum = numberOfCards <= MAXIMUM_NUMBER_OF_CARDS;

  return isEven && isGreaterThanMinimum && isLessThanMaximum;
}

function seeCards() {
  imagesCards.sort(comparador);
  cards = imagesCards.slice(0, numberOfCards / 2);
  cards = cards.concat(cards);
  cards.sort(comparador);
  console.log(cards);
  adicionarCartas();
}

function adicionarCartas() {
  let addCards = 0;
  while (addCards < numberOfCards) {
    newCards.innerHTML += `
        <div class="cards" onclick="clickCards(this)">
            <li class="face front-face"><img src="src/assets/images/parrot.png" alt="papagaio"></li>
            <li class="face back-face"><img src="${cards[addCards]}" alt="imagem-selecionada"></li>
        </div>
        `;
    console.log(cards);
    addCards++;
  }
}

function clickCards(click) {
  if (contador === 0) {
    first = click;
    first.classList.add("flipped");
    contador + 1;
  } else if (contador === 1) {
    second = click;
    second.classList.add("flipped");
    contador + 1;
    setTimeout(checkCards, 1000);
  }
  checkCards();
}

function checkCards() {
  if (
    first.querySelector(".back-face img").src !==
    second.querySelector(".back-face img").src
  ) {
    first.classList.remove("flipped");
    second.classList.remove("flipped");
    contador = 0;
  } else {
    contador = 0;
  }
}
