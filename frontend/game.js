const Deck = require("./deck");

class Game {
  constructor(){
    this.currentDeck = new Deck();
    this.currentDeck.renderBoard(this.currentDeck.board);
    this.score = 0;
  }

  updateScore(){
    this.score++;
    $("#score").html(this.score);
  }

  resetScore(){
    this.score = 0;
  }



}
module.exports = Game;
