// BlackJack

//card variables
let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
let values = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8',
  '7', '6', '5', '4', '3', '2'];

//DOM variable
let textArea = document.getElementById('text-area');

let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//game variable
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck =[];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx<suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx<values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx], 
                value: values[valueIdx]
            };
            deck.push(card);
        }
      }
      return deck;
}

function shuffleDeck(deck){
    for (let i=0; i<deck.length; i++){
        let swapIdx = Math.trunc(Math.random()*deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack'
    }
}

for (var i=0; i<deck.length; i++) {
   console.log (getCardString(deck[i]));
}