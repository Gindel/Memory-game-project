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

const restart = document.querySelector('.restart');
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

let shuffleCardList = shuffle(cardsList); // Creating shuffled cardList

//add random card
function addRandomSymbolToCard(array) {
        for (i = 0; i < array.length; i++) {
            array[i].firstElementChild.className = shuffleCardList[i];
        }
}

addRandomSymbolToCard(allCards);

function showSymbol(evt) {
        evt.target.className = 'card open show';
        // evt.target.isClicked = 1;

    }

deck.addEventListener('click', function (evt) {
    showSymbol(evt);
});


// function game(item){
//     deck.innerHTML += '<li class="card"><span class="lid"></span><i class="item"></i></li>';
//     document.querySelector('.item').className = item;
// }

// // TODO: Make loop of cards from random array with use function 'game'
// shuffleCardList.forEach(game);

// function reload(){
//     window.location.reload();

//     // TODO: Make loop of cards from random array with use function 'game'
//     shuffleCardList.forEach(game);
// }

// // TODO: add event listener 'click' to element which is handle in variable with name 'restart' which call to function reload
// restart.addEventListener('onclick', reload, false);




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

