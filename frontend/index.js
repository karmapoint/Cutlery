const Card = require("./card");
const Deck = require("./deck.js");

document.addEventListener("DOMContentLoaded", function(){
  const currentDeck = new Deck();
  let y = currentDeck.board;
  let x = currentDeck.shuffledCards;
  console.log(y);
  console.log(x.length);
  currentDeck.renderBoard(currentDeck.board);
});
