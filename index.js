"use strict";

let rank = 2;
let deck = [];
let suits = ["clubs", "diamonds", "hearts", "spades"];

let player1Deck = [],
    player2Deck = [];

function pushCard(suit, rank) {
    const newCard = {
        suit,
        rank,
    };
    deck.push(newCard);
}

function createDeck() {
    for (let suit of suits) {
        rank = 2;
        for (let i = 1; i <= 13; i++) {
            pushCard(suit, rank);
            rank++;
        }
    }
}

function shuffleArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
    console.log(array);
}

function pickTrump(deck) {
    return deck[0].suit;
}

function setup() {
    for (let i = 1; i <= 6; i++) {
        player1Deck.push(deck.pop());
        player2Deck.push(deck.pop());
    }
    console.log(player1Deck);
    console.log(player2Deck);
}

createDeck();
shuffleArr(deck);
pickTrump(deck);
setup();
