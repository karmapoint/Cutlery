const Deck = require("./deck");

class Game {
  constructor(){
    this.currentDeck = new Deck();
    this.currentDeck.renderBoard(this.currentDeck.board);
  }


}
module.exports = Game;
