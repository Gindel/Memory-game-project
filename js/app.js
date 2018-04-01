// List of my cards
 const cardsList = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt",
        "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb",
        "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];


let movesCounter = 0; // how much moves we will have
let timerStart; // Starting time
let timerEnd; // End time
let timerTick; // Timer speed
let playerStars = 3; // Players life’s / rating
let openCardList = []; // Opened Card List
let matchedCardList = []; // Card list that matched

const movesElement = document.querySelector('.moves');
const startMoves = "0 Moves";
const restart = document.querySelector('.restart'); // Creating const for restart button
const allCards = document.querySelectorAll('.deck li'); // Creating const for my allCards
const deck = document.querySelector('.deck'); // Creating const for deck

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

addRandomSymbolToCard(allCards);

// Game functions

function addRandomSymbolToCard(array) {  //Add random symbol to our deck li child
        let shuffleCardList = shuffle(cardsList); // Each time we creating shuffled cardList
        for (i = 0; i < array.length; i++) {
            array[i].firstElementChild.className = shuffleCardList[i];
        }

        movesElement.innerHTML = startMoves;
}

function showSymbol(evt) { //Showing symbol
        evt.target.className = 'card open show';
        movesCounter += 1;
        movesElement.innerHTML = movesCounter + " Moves";

        // evt.target.isClicked = 1; with this we will check if card clicked twice
}

function resetGame() { //Reseting game
    for (let card of allCards) { //Closing all cards
            card.className = "card close";
            // card.isClicked = 0;
        }
    addRandomSymbolToCard(allCards); //Shuffling all cards
}

//Game event listeners

deck.addEventListener('click', function (evt) { //showing card
    showSymbol(evt);
});

restart.addEventListener('click', function () { //reseting game
        resetGame();
})

/* check if card 1 = card 2 >leave open
    else cards closed



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

