"use strict";

let id = 1,
  suit = "clubs",
  rank = 2;
let deck = [];

let player1Deck = [],
  player2Deck = [];

function Card(id, suit, rank) {
  this.id = id;
  this.suit = suit;
  this.rank = rank;
}

function pushCard() {
  const newCard = new Card(id, suit, rank);
  deck.push(newCard);
}

function createDeck() {
  for (let i = 1; i <= 52; i++) {
    if (i >= 1 && i <= 13) {
      suit = "clubs";
      id = i;
      pushCard();
      rank++;
    } else if (i >= 14 && i <= 26) {
      switch (i) {
        case 14:
          rank = 2;
      }
      suit = "diamonds";
      id = i;
      pushCard();
      rank++;
    } else if (i >= 27 && i <= 39) {
      switch (i) {
        case 27:
          rank = 2;
      }
      suit = "hearts";
      id = i;
      pushCard();
      rank++;
    } else if (i >= 40 && i <= 52) {
      switch (i) {
        case 40:
          rank = 2;
      }
      suit = "spades";
      id = i;
      pushCard();
      rank++;
    }
  }
  console.log(deck);
}

function shuffleArr() {
  for (let i = deck.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[rand]] = [deck[rand], deck[i]];
  }
  console.log(deck);
}

function pickTrump() {
  const trump = deck[deck.length - 1].suit;
  console.log(trump);
  const storage = deck.pop();
  deck.unshift(storage);
  console.log(deck);
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
shuffleArr();
pickTrump();
setup();
