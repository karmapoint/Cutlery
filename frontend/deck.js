var _ = require('lodash');
const Card = require("./card");

const CardAttributes = {
  SHAPES: ["fork", "spoon", "knife"],
  COLORS: ["red", "blue", "yellow"],
  SHADINGS: ["solid", "outline", "gradient"],
  NUMBERS: [1,2,3]
};

class Deck {
  constructor(){
    this.cards = [];
    this.shuffledCards = this.generateDeck();
    this.board = this.deal12(this.shuffledCards);
  }

  generateDeck(){
    CardAttributes.SHAPES.forEach(shape => {
      CardAttributes.COLORS.forEach(color => {
        CardAttributes.SHADINGS.forEach(shading => {
          CardAttributes.NUMBERS.forEach(number => {
            this.cards.push(new Card(shape, color, shading, number));
          });
        });
      });
    });
    return _.shuffle(this.cards);
  }

  deal12(deck){
    let hand = [];
    for (let i = 0; i < 12; i++) {
      hand.push(deck.pop());
    }
    return hand;
  }

  renderBoard(board){
    for (var i = 1; i < 13; i++) {
      let target = `#card${i}`;
      $(target).append(`<div class=${board[i-1].cardClass}></div>`);
    }
  }

}
module.exports = Deck;
