const MINIMUM_NUMBER_OF_CARDS = 4;
const MAXIMUM_NUMBER_OF_CARDS = 14;
let PARROTS = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

let numberOfCards = 0;
let deckOfCards = [];
let move = [];
let moveCounter = 0;

shuffleInitialVariables();
startGame();
dynamicallyDisplaysCards();
shuffleCards();
rendersCards();


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
}

function validatesTheNumberOfCards() {
  const isEven = numberOfCards % 2 === 0;
  const isGreaterThanMinimum = numberOfCards >= MINIMUM_NUMBER_OF_CARDS;
  const isLessThanMaximum = numberOfCards <= MAXIMUM_NUMBER_OF_CARDS;

  return isEven && isGreaterThanMinimum && isLessThanMaximum;
}

function dynamicallyDisplaysCards() {
  const quantityOfPairs = numberOfCards / 2;
  for (let i = 0; i < quantityOfPairs; i++) {
    const card = createCard(i);
    deckOfCards.push(card);
    deckOfCards.push(card);
  }

  return deckOfCards;
}

function createCard(index) {
  const parrot = PARROTS[index];
  const cardHTML = `
  <div class="cards" onclick="clickCards(this)">
    <li class="face front-face">
      <img src="src/assets/images/parrot.png" alt="papagaio" />
    </li>
    <li class="face back-face">
      <img src="src/assets/images/${parrot}.gif" alt="parrot-${parrot}" />
    </li>
  </div>
  `;
  return cardHTML;
}

function shuffleInitialVariables() {
  return PARROTS.sort(comparator);
}

function shuffleCards() {
  return deckOfCards.sort(comparator);
}

function comparator() {
  return Math.random() - 0.5;
}

function rendersCards() {
  let container = document.querySelector(".container-cards");
  for (let i in deckOfCards) {
    const card = deckOfCards[i];
    container.innerHTML += card;
  }
}

function clickCards(clickedCard) {
  if (isAValidCard(clickedCard)) {
    clickedCard.classList.add("flipped");
    move.push(clickedCard);

    if (move.length === 2) {
      checksIdenticalsCards();
    }
  }
}

function isAValidCard(card) {
  const flipped = card.classList.contains("flipped");
  const right = card.classList.contains("rigth");

  return !flipped || !right;
}

function checksIdenticalsCards() {
  const firstMove = move[0];
  const secondMove = move[1];

  if (firstMove.innerHTML === secondMove.innerHTML) {
    firstMove.classList.add("right");
    secondMove.classList.add("right");

    move = [];
  }
  moveCounter++;
}
