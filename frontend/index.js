const Card = require("./card");
const Deck = require("./deck");
const Game = require("./game");
const dragula = require('dragula');

document.addEventListener("DOMContentLoaded", function(){
  let currentGame = new Game();
  $( "#newGame").click(function() {
    currentGame.currentDeck.clearBoard();
    new Game();
  });
}
);

let drake = dragula({
  isContainer: (el) => {
    return el.classList.contains('card_start') || el.classList.contains('target');
  }
});
