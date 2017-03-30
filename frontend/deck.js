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
    for (let i = 0; i < 15; i++) {
      hand.push(deck.pop());
    }
    return hand;
  }

  draw3(deck){
    let newCards = [];
    for (let i = 0; i < 3; i++) {
      newCards.push(deck.pop());
    }
    this.fillBoard(newCards);
  }

  fillBoard(cards){
    for (let i = 0; i < 3; i++) {
      $('.card_start:empty:first').append(`<div class=${cards[i].cardClass}></div>`);
    }
  }

  renderBoard(board){
    for (var i = 1; i < 16; i++) {
      let target = `#card${i}`;
      $(target).append(`<div class=${board[i-1].cardClass}></div>`);
    }
  }
  clearBoard(){
    for (var i = 1; i < 16; i++) {
      let target = `#card${i}`;
      $(target).empty();
    }
    $(".target").empty();
  }

  clearTargets(){
    for (var i = 1; i < 4; i++) {
      let target = `#target${i}`;
      $(target).empty();
    }
    $(".target").empty();
  }


}
module.exports = Deck;
