class Card {
  constructor(shape, color, shading, number){
    this.shape = shape;
    this.color = color;
    this.shading = shading;
    this.number = number;
    let shapeNumber = this.shape + "_" + this.number;
    let colorShading = this.color + "_" + this.shading;
    this.cardClass = shapeNumber + " " + colorShading;
  }
}

const CardAttributes = {
  SHAPES: ["fork", "spoon", "knife"],
  COLORS: ["red", "blue", "yellow"],
  SHADINGS: ["solid", "outline", "gradient"],
  NUMBERS: [1,2,3]
};

class Deck {
  constructor(){
    this.cards = [];
    this.generateDeck();
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
    return this.cards;
  }

}
