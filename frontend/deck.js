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

}
module.exports = Deck;
